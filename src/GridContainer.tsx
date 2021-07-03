import {
  GridCellParams,
  GridColDef,
  GridRowData,
} from "@material-ui/data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { NetworkRequest } from "./App";
import { __, match } from "ts-pattern";
import { FilterItem, FilterUnion, GroupOperator } from "./types";
import ReactJson from "react-json-view";
import { Grid } from "./Grid";
import { Toolbar } from "./Toolbar";
import { Box } from "@material-ui/core";

export type GridContainerProps = {
  requests: NetworkRequest[];
  setRequests: (value: NetworkRequest[]) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
};

export const GridContainer = ({
  requests,
  setRequests,
  isPaused,
  setIsPaused,
}: GridContainerProps) => {
  const [selectedRow, setSelectedRow] = useState<number | string>();

  const renderJsonCell = (params: GridCellParams) => {
    return params.id === selectedRow
      ? match(params.value)
          .with(__.string, (value) => {
            try {
              const jsonValue = JSON.parse(value);
              return <ReactJson src={jsonValue} />;
            } catch {
              return params.value;
            }
          })
          .with(__.number, (value) => value)
          .with(undefined, () => "")
          .otherwise(() => {
            return params.value && params.value instanceof Object ? (
              <ReactJson src={params.value} />
            ) : (
              ""
            );
          })
      : params.value
      ? params.value.toString()
      : "";
  };

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
      flex: 1,
      renderCell: renderJsonCell,
      cellClassName: "json-cell",
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
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
    {
      field: "response",
      headerName: "Response",
      width: 400,
      flex: 1,
      renderCell: renderJsonCell,
      cellClassName: "json-cell",
    },
  ];

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
        headerName: `PostData: ${key}`,
        width: 150,
        hide: true,
        renderCell: renderJsonCell,
      })),
    [postDataKeys]
  );

  useEffect(() => {
    filters.length > 0
      ? setFilteredRows(getFilteredRows(rows, filters, rootGroupOperator))
      : setFilteredRows(rows);
  }, [filters, rows]);

  const columns = useMemo(() => {
    return staticColumns.reduce<GridColDef[]>((acc, col) => {
      return col.field === "postData"
        ? [...acc, col, ...postDataCols]
        : [...acc, col];
    }, []);
  }, [postDataCols, selectedRow]);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"stretch"}
      style={{
        height: "100vh",
      }}
    >
      <Toolbar
        filters={filters}
        setFilters={setFilters}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        setRequests={setRequests}
      />
      <Grid
        rows={filteredRows}
        columns={columns}
        setSelectedRow={setSelectedRow}
      />
    </Box>
  );
};

const getPostDataValues = (
  request: NetworkRequest,
  postDataKeys: Set<string>
): Record<string, any> => {
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
  return rows.filter((row) => evaluateFilters(row, filters, groupOperator));
};

const evaluateFilters = (
  row: GridRowData,
  filters: FilterUnion[],
  groupOperator: GroupOperator
): boolean => {
  return filters.some((filter) =>
    match(filter)
      .with({ type: "item" }, (filterItem) => {
        return groupOperator === "AND"
          ? !evaluateFilter(row, filterItem)
          : evaluateFilter(row, filterItem);
      })
      .with({ type: "group" }, ({ filterItems, operator }) =>
        evaluateFilters(row, filterItems, operator)
      )
      .exhaustive()
  );
};

const evaluateFilter = (row: GridRowData, filterItem: FilterItem): boolean => {
  if (filterItem.columnField in row) {
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
  response: request.responseContent.content,
});
