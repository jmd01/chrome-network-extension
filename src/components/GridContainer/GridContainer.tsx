import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  GridCellParams,
  GridColDef,
  GridRowData,
} from "@material-ui/data-grid";
import { NetworkRequest } from "../../App";
import { __, match } from "ts-pattern";
import {
  FilterUnion,
  GridColumnVisibilityChangeParams,
  GroupOperator,
} from "../types";
import ReactJson from "react-json-view";
import { Grid } from "../Grid";
import { Toolbar } from "../Toolbar";
import { Box, IconButton, useTheme } from "@material-ui/core";
import { ViewRequest } from "../ViewRequest";
import { Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { getFilteredRows, mapRequestToGridRow } from "./utils";

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
              return <ReactJsonView value={jsonValue} />;
            } catch {
              return params.value;
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
          })
      : match(params.value)
          .with(__.string, __.number, (value) => value)
          .with(undefined, () => "")
          .otherwise(() => JSON.stringify(params.value));
  };

  const staticColumns: GridColDef[] = [
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
      renderCell: renderJsonCell,
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
        selectedRow={selectedRow}
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

type ReactJsonViewProps = {
  value: object;
};
export const ReactJsonView = ({ value }: ReactJsonViewProps) => {
  const theme = useTheme();
  return (
    <ReactJson
      src={value}
      name={null}
      displayDataTypes={false}
      displayObjectSize={false}
      quotesOnKeys={false}
      theme={theme.palette.type === "light" ? "rjv-default" : "summerfruit"}
    />
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
