import React from "react";
import { DataGrid, GridColDef, GridRowData } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "&": {
      flex: "1 1 0",
    },
    "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
      maxHeight: "300px!important",
    },
    "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .json-cell": {
      maxHeight: "300px!important",
      whiteSpace: "normal",
      overflowY: "scroll",
    },
    "& .json-cell": {
      alignItems: "flex-start",
    },
  },
});
export type GridProps = {
  rows: GridRowData[];
  columns: GridColDef[];
  setSelectedRow: (value: number | string | undefined) => void;
};

export const Grid = ({ rows, columns, setSelectedRow }: GridProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowHeight={30}
        onRowClick={(params) => setSelectedRow(params.id)}
      />
    </div>
  );
};
