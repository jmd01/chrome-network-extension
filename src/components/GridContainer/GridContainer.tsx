import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { __, match } from "ts-pattern";
import {
  FilterItem,
  FilterUnion,
  GridColumnVisibilityChangeParams,
  GroupOperator,
  NetworkRequest,
  notEmpty,
  OptimisationConfig,
} from "../../types";
import { Grid } from "../Grid";
import { Toolbar } from "../Toolbar";
import { Box, IconButton } from "@material-ui/core";
import { ViewRequest } from "../ViewRequest";
import { Visibility } from "@material-ui/icons";
import { getFilteredRows, mapRequestToGridRow } from "./utils";
import {
  GridCellParams,
  GridColDef,
  GridFilterModel,
  GridRowData,
} from "@mui/x-data-grid";
import { GridCellExpand } from "./GridCellExpand";
import { ReactJsonView } from "../ReactJsonView";

function renderCellExpand(params: GridCellParams) {
  return (
    <GridCellExpand
      value={params.value ? params.value.toString() : ""}
      jsonCell={match(params.value)
        .with(__.string, (value) => {
          try {
            const jsonValue = JSON.parse(value);
            return <ReactJsonView value={jsonValue} />;
          } catch {
            return params.value ? params.value.toString() : "";
          }
        })
        .with(__.number, (value) => value)
        .with(undefined, () => "")
        .otherwise(() => {
          return params.value && params.value instanceof Object ? (
            <ReactJsonView value={params.value} />
          ) : (
            ""
          );
        })}
      width={params.colDef.width}
    />
  );
}

export type GridContainerProps = {
  optimisationConfig: OptimisationConfig;
  setOptimisationConfig: (value: OptimisationConfig) => void;
  requests: NetworkRequest[];
  clearLog: () => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  preserveLog: boolean;
  setPreserveLog: (value: boolean) => void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GridContainer = memo(function GridContainer({
  optimisationConfig,
  setOptimisationConfig,
  requests,
  clearLog,
  isPaused,
  setIsPaused,
  preserveLog,
  setPreserveLog,
  setDarkMode,
}: GridContainerProps) {
  // console.count("GridContainer");

  const [showSettings, setShowSettings] = useState(true);
  const [viewRowId, setViewRowId] = useState<number | string>();

  const staticColumns: GridColDef[] = useStaticColumns(
    setViewRowId,
    optimisationConfig.showResponseColumn
  );

  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [filteredRows, setFilteredRows] = useState<GridRowData[]>([]);
  const [filters, setFilters] = useState<FilterUnion[]>([]);
  const [rootGroupOperator] = useState<GroupOperator>("AND");

  const postDataKeys = useMemo(() => {
    return optimisationConfig.dynamicPostDataColumns
      ? requests.reduce<Set<string>>((acc, request) => {
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
        }, new Set())
      : new Set<string>();
  }, [optimisationConfig.dynamicPostDataColumns, requests]);

  const postDataCols: GridColDef[] = useMemo(
    () =>
      optimisationConfig.dynamicPostDataColumns
        ? [...postDataKeys].map((key) => {
            const col = columns.find((col) => col.field === key);
            return {
              field: key,
              headerName: `PostData: ${key}`,
              width: 150,
              hide: col ? col.hide : true,
              renderCell: renderCellExpand,
              cellClassName: "json-cell",
            };
          })
        : [],
    [optimisationConfig.dynamicPostDataColumns, postDataKeys, columns]
  );

  const rows: GridRowData[] = useMemo(() => {
    return requests.map((request, index) =>
      mapRequestToGridRow(request, index, postDataKeys)
    );
  }, [requests, postDataKeys]);

  useEffect(() => {
    if (filters.length > 0) {
      const filteredRows = getFilteredRows(rows, filters, rootGroupOperator);
      setFilteredRows(filteredRows);
    } else {
      setFilteredRows(rows);
    }
  }, [filters, rows, rootGroupOperator]);

  useEffect(() => {
    if (optimisationConfig.dynamicPostDataColumns) {
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
    } else {
      setColumns(staticColumns);
    }
  }, [
    optimisationConfig.dynamicPostDataColumns,
    staticColumns,
    columns,
    postDataCols,
  ]);

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

  const handleFilterModelChange = useCallback((model: GridFilterModel) => {
    setFilters((filters) => {
      const filterModelFilters = model.items
        .map(({ id, columnField, operatorValue, value }) => {
          if (columnField && operatorValue && value && id) {
            return {
              type: "item" as const,
              id: id.toString(),
              columnField,
              operator: mapOperatorValueToOperator[operatorValue],
              value,
            };
          }
        })
        .filter(notEmpty);

      const quickFilters = filters.find(({ id }) => id === "quick");
      return [
        ...(quickFilters ? [quickFilters] : []),
        {
          id: "dataGrid", // Filters set from DataGrid filter panel
          type: "group",
          operator: "AND",
          filterItems: filterModelFilters,
        },
      ];
    });
  }, []);

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
        preserveLog={preserveLog}
        setPreserveLog={setPreserveLog}
        clearLog={clearLog}
        setDarkMode={setDarkMode}
        setShowSettings={setShowSettings}
        optimisationConfig={optimisationConfig}
        setOptimisationConfig={setOptimisationConfig}
      />
      <Grid
        rows={filteredRows}
        columns={columns}
        handleColumnVisibilityChange={handleColumnVisibilityChange}
        handleFilterModelChange={handleFilterModelChange}
        showSettings={showSettings}
        setViewRowId={setViewRowId}
      />
      {viewRowId && (
        <ViewRequest
          requests={requests}
          filteredRows={filteredRows}
          viewRowId={viewRowId}
          setViewRowId={setViewRowId}
          optimisationConfig={optimisationConfig}
        />
      )}
    </Box>
  );
});

const mapOperatorValueToOperator: Record<string, FilterItem["operator"]> = {
  "=": "eq",
  "!=": "notEq",
  ">": "gt",
  ">=": "gtEq",
  "<": "lt",
  "<=": "ltEq",
  contains: "contains",
  equals: "eq",
  startsWith: "startsWith",
  endsWith: "endsWith",
};

const SmallIconButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      aria-label="view"
      size={"small"}
      onClick={() => {
        onClick();
      }}
    >
      <Visibility />
    </IconButton>
  );
};

const useStaticColumns = (
  setViewRowId: (value: string | number | undefined) => void,
  showResponseColumn: boolean
) => {
  const renderViewCell = useCallback(
    (params: GridCellParams) => {
      const onClick = () => {
        setViewRowId(params.id);
      };

      return <SmallIconButton onClick={onClick} />;
    },
    [setViewRowId]
  );

  return useMemo(
    () => [
      { field: "id", headerName: "ID", width: 50, type: "number" },
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
        renderCell: renderCellExpand,
        cellClassName: "json-cell",
      },
      {
        field: "status",
        headerName: "Status",
        width: 90,
      },
      {
        field: "type",
        headerName: "Type",
        width: 80,
      },
      {
        field: "size",
        headerName: "Size",
        width: 80,
      },
      {
        field: "time",
        headerName: "Time",
        width: 80,
      },
      {
        field: "response",
        headerName: "Response",
        width: 400,
        flex: 1,
        renderCell: renderCellExpand,
        cellClassName: "json-cell",
        hide: !showResponseColumn,
      },
    ],
    [showResponseColumn, renderViewCell]
  );
};
