import {
  GridCellParams,
  GridColDef,
  GridRowData,
} from "@material-ui/data-grid";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NetworkRequest } from "../App";
import { __, match } from "ts-pattern";
import {
  FilterItem,
  FilterUnion,
  GridColumnVisibilityChangeParams,
  GroupOperator,
} from "./types";
import ReactJson from "react-json-view";
import { Grid } from "./Grid";
import { Toolbar } from "./Toolbar";
import { Box, IconButton, useTheme } from "@material-ui/core";
import { ViewRequest } from "./ViewRequest";
import { Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiSvgIcon-root": {
      fontSize: "1.2rem",
    },
    "& .MuiChip-root": {
      fontSize: "0.75rem",
      lineHeight: "1.53",
    },
  },
});

const SmallIconButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      aria-label="view"
      size={"small"}
      onClick={() => {
        console.log("onClick");
        onClick();
      }}
    >
      <Visibility />
    </IconButton>
  );
};

export type GridContainerProps = {
  requests: NetworkRequest[];
  setRequests: (value: NetworkRequest[]) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GridContainer = ({
  requests,
  setRequests,
  isPaused,
  setIsPaused,
  setDarkMode,
}: GridContainerProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number | string>();
  const [viewRowId, setViewRowId] = useState<number | string>();
  const theme = useTheme();

  const renderViewCell = (params: GridCellParams) => {
    const onClick = () => {
      setViewRowId(params.id);
    };

    return <SmallIconButton onClick={onClick} />;
  };

  const renderJsonCell = (params: GridCellParams) => {
    return params.id === selectedRow
      ? match(params.value)
          .with(__.string, (value) => {
            try {
              const jsonValue = JSON.parse(value);
              return (
                <ReactJson
                  src={jsonValue}
                  name={null}
                  displayDataTypes={false}
                  displayObjectSize={false}
                  theme={
                    theme.palette.type === "light"
                      ? "rjv-default"
                      : "summerfruit"
                  }
                />
              );
            } catch {
              return params.value;
            }
          })
          .with(__.number, (value) => value)
          .with(undefined, () => "")
          .otherwise(() => {
            return params.value && params.value instanceof Object ? (
              <ReactJson
                src={params.value}
                name={null}
                displayDataTypes={false}
                displayObjectSize={false}
                theme={
                  theme.palette.type === "light" ? "rjv-default" : "summerfruit"
                }
              />
            ) : (
              ""
            );
          })
      : match(params.value)
          .with(__.string, __.number, (value) => value)
          .with(undefined, () => "")
          .otherwise(() => JSON.stringify(params.value));
  };

  const staticColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90, type: "number" },
    {
      field: "view",
      headerName: "View",
      width: 90,
      renderCell: renderViewCell,
      disableColumnMenu: true,
    },
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

  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [filteredRows, setFilteredRows] = useState<GridRowData[]>([]);
  const [filters, setFilters] = useState<FilterUnion[]>([]);
  const [rootGroupOperator] = useState<GroupOperator>("OR");

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

  const postDataCols: GridColDef[] = useMemo(
    () =>
      [...postDataKeys].map((key) => {
        const col = columns.find((col) => col.field === key);
        return {
          field: key,
          headerName: `PostData: ${key}`,
          width: 150,
          hide: col ? col.hide : true,
          renderCell: renderJsonCell,
          cellClassName: "json-cell",
        };
      }),
    [postDataKeys, columns]
  );

  const rows: GridRowData[] = useMemo(() => {
    return requests.map((request, index) =>
      mapRequestToGridRow(request, index, postDataKeys)
    );
  }, [requests, postDataCols]);

  useEffect(() => {
    filters.length > 0
      ? setFilteredRows(getFilteredRows(rows, filters, rootGroupOperator))
      : setFilteredRows(rows);
  }, [filters, rows]);

  useEffect(() => {
    const currentPostDataCols = columns.filter(
      (col) => col.headerName && /^PostData:/.test(col.headerName)
    );
    if (postDataCols.length !== currentPostDataCols.length) {
      setColumns(
        staticColumns.reduce<GridColDef[]>((acc, col) => {
          return col.field === "postData"
            ? [...acc, col, ...postDataCols]
            : [...acc, col];
        }, [])
      );
    }
  }, [columns, postDataCols]);

  useEffect(() => {
    setColumns((columns) =>
      columns.reduce<GridColDef[]>((acc, col) => {
        return col.field === "postData"
          ? [...acc, col, ...postDataCols]
          : [...acc, col];
      }, [])
    );
  }, [selectedRow]);

  const handleColumnVisibilityChange = useCallback(
    (params: GridColumnVisibilityChangeParams) => {
      setColumns(
        columns.map((col) =>
          col.field === params.field ? { ...col, hide: !params.isVisible } : col
        )
      );
    },
    [setColumns, columns]
  );

  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"stretch"}
      style={{
        height: "100vh",
      }}
      className={classes.root}
    >
      <Toolbar
        filters={filters}
        setFilters={setFilters}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        setRequests={setRequests}
        setDarkMode={setDarkMode}
        setShowSettings={setShowSettings}
      />
      <Grid
        rows={filteredRows}
        columns={columns}
        setSelectedRow={setSelectedRow}
        handleColumnVisibilityChange={handleColumnVisibilityChange}
        showSettings={showSettings}
      />
      <ViewRequest
        requests={requests}
        viewRowId={viewRowId}
        setViewRowId={setViewRowId}
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
  postData: request.request.postData?.text
    ? request.request.postData?.text.replace(/\\n/g, "")
    : "",
  status: request.response.status,
  type: (request as any)._resourceType,
  size: request.response._transferSize,
  ...getPostDataValues(request, postDataKeys),
  response: request.responseContent.content
    ? request.responseContent.content.replace(/\\n/g, "")
    : "",
});
