import React from "react";
import {
  DataGrid,
  GridColDef,
  GridFilterModelParams,
  GridRowData,
  GridToolbar,
} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import { createStyles, Theme } from "@material-ui/core";
import { GridColumnVisibilityChangeParams } from "../types";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      "&": {
        flex: "1 1 0",
      },
      "& .MuiDataGrid-root": {
        fontSize: "12px",
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
      "& .MuiDataGrid-root.MuiDataGrid-cell": {
        padding: "0 5px",
      },
      "& .MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer": {
        padding: "0",
      },

      "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .json-cell": {
        maxHeight: "300px!important",
        whiteSpace: "normal",
        wordBreak: "break-all",
        overflowY: "scroll",
        lineHeight: "18px!important",
        minHeight: "0!important",
      },
      "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .json-cell .variable-row":
        {
          padding: "0px 5px 0px 20px!important",
        },
      "& .json-cell .icon-container": {
        lineHeight: "0!important",
        verticalAlign: "middle!important",
      },
      "& .json-cell .object-meta-data": {
        position: "relative",
      },
      "& .json-cell .copy-to-clipboard-container": {
        position: "absolute",
        zIndex: 99,
      },
      "& .json-cell .object-meta-data .copy-to-clipboard-container": {
        top: "-10px!important",
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
      "& .MuiDataGrid-root .MuiDataGrid-footer": {
        borderTop: `1px solid
          ${
            theme.palette.type === "dark"
              ? theme.palette.grey["800"]
              : theme.palette.grey["200"]
          }`,
      },
      "& .MuiDataGrid-root .MuiTablePagination-root": {
        fontSize: "12px",
      },
      "& .MuiDataGrid-root .MuiDataGrid-footer, & .MuiDataGrid-root .MuiTablePagination-toolbar":
        {
          minHeight: "29px",
          height: "29px",
        },
    },
  });
});

export type GridProps = {
  rows: GridRowData[];
  columns: GridColDef[];
  setViewRowId: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  handleColumnVisibilityChange: (
    params: GridColumnVisibilityChangeParams
  ) => void;
  handleFilterModelChange: (params: GridFilterModelParams) => void;
  showSettings: boolean;
};

export const Grid = ({
  rows,
  columns,
  handleColumnVisibilityChange,
  handleFilterModelChange,
  showSettings,
  setViewRowId,
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
          setViewRowId(params.id);
        }}
        components={
          showSettings
            ? {
                Toolbar: GridToolbar,
              }
            : undefined
        }
        onColumnVisibilityChange={handleColumnVisibilityChange}
        disableColumnMenu
        onFilterModelChange={handleFilterModelChange}
      />
    </div>
  );
};
