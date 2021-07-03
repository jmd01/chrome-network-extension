import React from "react";
import { DataGrid, GridColDef, GridRowData } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
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
      backgroundColor: "#f3f3f3",
    },
    "& .MuiDataGrid-root .MuiDataGrid-columnSeparator": {
      minHeight: "30px!important",
    },
    "& .MuiDataGrid-root .MuiDataGrid-window": {
      top: "30px!important",
    },
    "& .MuiDataGrid-root .Mui-even.MuiDataGrid-row": {
      backgroundColor: "#fbfbfb",
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
  },
});
export type GridProps = {
  rows: GridRowData[];
  columns: GridColDef[];
  setSelectedRow: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
};

export const Grid = ({ rows, columns, setSelectedRow }: GridProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowHeight={24}
        onRowClick={(params, event) => {
          // console.log(
          //   event,
          //   event.target,
          //   (event.target as HTMLElement).classList.contains("json-cell")
          // );
          setSelectedRow(params.id);
        }}
        onCellClick={(params, event) => {
          console.log("onCellClick", params, event);
        }}
      />
    </div>
  );
};
