import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowData,
  GridToolbar,
} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import { createStyles, Theme } from "@material-ui/core";
import { GridColumnVisibilityChangeParams } from "./types";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      "&": {
        flex: "1 1 0",
      },
      "& .MuiDataGrid-root": {
        fontSize: "12px",
      },
      "& .MuiDataGrid-renderingZone": {
        maxHeight: "initial!important",
      },
      "& .MuiDataGrid-root .MuiDataGrid-columnsContainer": {
        minHeight: "30px!important",
        maxHeight: "30px!important",
        lineHeight: "30px!important",
        backgroundColor:
          theme.palette.type === "dark"
            ? theme.palette.grey["800"]
            : theme.palette.grey["200"],
      },
      "& .MuiDataGrid-root .MuiDataGrid-columnSeparator": {
        minHeight: "30px!important",
        color: theme.palette.divider,
      },
      "& .MuiDataGrid-root .MuiDataGrid-window": {
        top: "30px!important",
      },
      "& .MuiDataGrid-root .Mui-even.MuiDataGrid-row": {
        backgroundColor:
          theme.palette.type === "dark" ? theme.palette.grey["900"] : "#fefefe",
      },
      "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
        maxHeight: "300px!important",
        backgroundColor: "rgba(63, 81, 181, 0.08)",
        borderBottom: "1px solid #e0e0e0",
      },
      "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell": {
        borderColor: "transparent",
      },
      "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .json-cell": {
        maxHeight: "300px!important",
        whiteSpace: "normal",
        overflowY: "scroll",
      },
      "& .json-cell": {
        alignItems: "flex-start",
      },
      "& .react-json-view": {
        backgroundColor: "transparent!important",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "1rem",
      },
      "& .MuiDataGrid-root .MuiDataGrid-footer, & .MuiDataGrid-root .MuiTablePagination-toolbar":
        {
          minHeight: "36px",
        },
    },
  });
});

export type GridProps = {
  rows: GridRowData[];
  columns: GridColDef[];
  setSelectedRow: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  handleColumnVisibilityChange: (
    params: GridColumnVisibilityChangeParams
  ) => void;
  showSettings: boolean;
};

export const Grid = ({
  rows,
  columns,
  setSelectedRow,
  handleColumnVisibilityChange,
  showSettings,
}: GridProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowHeight={24}
        onRowClick={(params) => {
          setSelectedRow(params.id);
        }}
        components={
          showSettings
            ? {
                Toolbar: GridToolbar,
              }
            : undefined
        }
        onColumnVisibilityChange={handleColumnVisibilityChange}
      />
    </div>
  );
};
