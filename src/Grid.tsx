import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowData,
} from "@material-ui/data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { NetworkRequest } from "./App";
import { match } from "ts-pattern";
import { FilterItem, FilterUnion, GroupOperator } from "./types";
import { Filter } from "./Filter";
import { Button } from "@material-ui/core";

const staticColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "postData",
    headerName: "PostData",
    width: 400,
    renderCell: (params: GridCellParams) => (
      <strong>
        {(params.value as Date).getFullYear()}
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Open
        </Button>
      </strong>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    type: "number",
  },
  {
    field: "type",
    headerName: "Type",
    width: 120,
  },
  {
    field: "size",
    headerName: "Size",
    width: 120,
  },
];

export type GridProps = { requests: NetworkRequest[] };

export const Grid = ({ requests }: GridProps) => {
  const [filteredRows, setFilteredRows] = useState<GridRowData[]>([]);
  const [filters, setFilters] = useState<FilterUnion[]>([]);
  const [rootGroupOperator, setRootGroupOperator] =
    useState<GroupOperator>("OR");

  const postDataKeys = useMemo(() => {
    return requests.reduce<Set<string>>((acc, request) => {
      if (
        request.request.postData?.text &&
        request.request.postData?.mimeType === "application/json"
      ) {
        const parsedPostData = JSON.parse(request.request.postData.text);
        console.log(parsedPostData);
        Object.keys(parsedPostData).forEach((key) => {
          acc.add(key);
        });
      }
      return acc;
    }, new Set());
  }, [requests]);

  const rows: GridRowData[] = useMemo(() => {
    return requests.map((request, index) =>
      mapRequestToGridRow(request, index, postDataKeys)
    );
  }, [requests, postDataKeys]);

  const postDataCols = useMemo(
    () =>
      [...postDataKeys].map((key) => ({
        field: key,
        headerName: key,
        width: 150,
      })),
    [postDataKeys]
  );

  useEffect(() => {
    filters.length > 0
      ? setFilteredRows(getFilteredRows(rows, filters, rootGroupOperator))
      : setFilteredRows(rows);
  }, [filters, rows]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Filter filters={filters} setFilters={setFilters} />
      <DataGrid
        rows={filteredRows}
        columns={[...staticColumns, ...postDataCols]}
        pageSize={100}
        rowHeight={30}
      />
    </div>
  );
};

const getPostDataValues = (
  request: NetworkRequest,
  postDataKeys: Set<string>
): Record<string, any> => {
  console.log(request, postDataKeys);
  return [...postDataKeys].reduce((acc, key) => {
    if (request.request.postData?.text) {
      const parsedPostData = JSON.parse(request.request.postData.text);
      if (key in parsedPostData) {
        acc = {
          ...acc,
          [key]: parsedPostData[key],
        };
      }
    }
    return acc;
  }, {});
};

const getFilteredRows = (
  rows: GridRowData[],
  filters: FilterUnion[],
  groupOperator: GroupOperator
) => {
  return rows.filter((row) => {
    console.log("getFilteredRequests", row);
    return evaluateFilters(row, filters, groupOperator);
  });
};

const evaluateFilters = (
  row: GridRowData,
  filters: FilterUnion[],
  groupOperator: GroupOperator
): boolean => {
  const ret = filters.some((filter) =>
    match(filter)
      .with({ type: "item" }, (filterItem) =>
        groupOperator === "AND"
          ? !evaluateFilter(row, filterItem)
          : evaluateFilter(row, filterItem)
      )
      .with({ type: "group" }, ({ filterItems, operator }) =>
        evaluateFilters(row, filterItems, operator)
      )
      .exhaustive()
  );
  console.log(ret);
  return ret;
};

const evaluateFilter = (row: GridRowData, filterItem: FilterItem): boolean => {
  if (filterItem.columnField in row) {
    console.log(row, filterItem);
    return match(filterItem.operator)
      .with("eq", () => {
        return row[filterItem.columnField] === filterItem.value;
      })
      .with("notEq", () => {
        return row[filterItem.columnField] !== filterItem.value;
      })
      .otherwise(() => false);
  }
  return false;
};

const mapRequestToGridRow = (
  request: NetworkRequest,
  index: number,
  postDataKeys: Set<string>
): GridRowData => ({
  id: index,
  name: /[^/]*$/.exec(request.request.url)?.[0] ?? request.request.url,
  postData: request.request.postData?.text,
  status: request.response.status,
  type: (request as any)._resourceType,
  size: request.response._transferSize,
  ...getPostDataValues(request, postDataKeys),
});
