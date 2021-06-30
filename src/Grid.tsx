import React from "react";
import { DataGrid, GridColDef, GridRowData } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: "rgba(255, 7, 0, 0.55)",
    },
    "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
      maxHeight: "300px!important",
    },
    "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .json-cell": {
      maxHeight: "300px!important",
      whiteSpace: "normal",
    },
    "& .json-cell": {
      alignItems: "flex-start",
      overflowY: "scroll",
    },
  },
});
export type GridProps = { rows: GridRowData[]; columns: GridColDef[] };

export const Grid = ({ rows, columns }: GridProps) => {
  const classes = useStyles();
  return (
    <div style={{ height: "100%", width: "100%" }} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowHeight={30}
        onRowClick={(params, event) => {
          console.log("onRowClick", params, event);
        }}
        onCellClick={(params, event) => {
          console.log("onCellClick", params, event);
        }}
      />
    </div>
  );
};
