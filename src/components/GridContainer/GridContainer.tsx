import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NetworkRequest } from "../../App";
import { __, match } from "ts-pattern";
import {
  FilterUnion,
  GridColumnVisibilityChangeParams,
  GroupOperator,
} from "../types";
import { Grid } from "../Grid";
import { Toolbar } from "../Toolbar";
import { Box, IconButton } from "@material-ui/core";
import { ViewRequest } from "../ViewRequest";
import { Visibility } from "@material-ui/icons";
import { getFilteredRows, mapRequestToGridRow } from "./utils";
import {
  GridCellParams,
  GridColDef,
  GridRowData,
} from "@material-ui/data-grid";
import { GridCellExpand } from "./GridCellExpand";
import { ReactJsonView } from "../ReactJsonViewProps";

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
  const [viewRowId, setViewRowId] = useState<number | string>();

  const staticColumns: GridColDef[] = useStaticColumns(setViewRowId);

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
          renderCell: renderCellExpand,
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
        setDarkMode={setDarkMode}
        setShowSettings={setShowSettings}
      />
      <Grid
        rows={filteredRows}
        columns={columns}
        handleColumnVisibilityChange={handleColumnVisibilityChange}
        showSettings={showSettings}
        setViewRowId={setViewRowId}
      />
      <ViewRequest
        requests={requests}
        filteredRows={filteredRows}
        viewRowId={viewRowId}
        setViewRowId={setViewRowId}
      />
    </Box>
  );
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
  setViewRowId: (value: string | number | undefined) => void
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
        field: "response",
        headerName: "Response",
        width: 400,
        flex: 1,
        renderCell: renderCellExpand,
        cellClassName: "json-cell",
      },
    ],
    [renderViewCell]
  );
};
