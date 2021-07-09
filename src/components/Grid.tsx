import React, { useMemo, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowData,
  GridToolbar,
} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import { createStyles, Theme } from "@material-ui/core";
import { GridColumnVisibilityChangeParams } from "./types";
import { __, match } from "ts-pattern";

const useStyles = (
  height: number | undefined,
  isSelectedRow: boolean,
  isSelectedRowInCurrentPage: boolean
) =>
  makeStyles((theme: Theme) => {
    console.log("height", height);
    const viewportCss = match({
      height,
      isSelectedRow,
      isSelectedRowInCurrentPage,
    })
      // .with({ isSelectedRow: false }, { height: undefined }, () => ({}))
      .with(
        {
          height: __.number,
          isSelectedRow: true,
          isSelectedRowInCurrentPage: true,
        },
        ({ height }) => ({ maxHeight: `${height + 276}px!important` })
      )
      .with(
        {
          height: __.number,
          isSelectedRow: true,
          isSelectedRowInCurrentPage: false,
        },
        ({ height }) => ({ maxHeight: `${height - 276}px!important` })
      )
      .otherwise(() => ({}));

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
        "& .MuiDataGrid-viewport": viewportCss,
        // "& .MuiDataGrid-viewport": {
        // ...(height && isSelectedRowInCurrentPage
        //   ? { maxHeight: `${height + 276}px!important` }
        //   : {}),
        // },
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
            theme.palette.type === "dark"
              ? theme.palette.grey["900"]
              : "#fefefe",
        },
        "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
          maxHeight: "300px!important",
          height: "300px!important",
          backgroundColor: "rgba(63, 81, 181, 0.08)",
          borderBottom: "1px solid #e0e0e0",
        },
        "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell": {
          borderColor: "transparent",
        },
        "& .MuiDataGrid-root.MuiDataGrid-cell": {
          padding: "0 5px",
        },
        "& .MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer": {
          padding: "0",
        },
        "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected .json-cell": {
          maxHeight: "300px!important",
          height: "300px!important",
          whiteSpace: "normal",
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
        "& .MuiDataGrid-root .MuiDataGrid-footer, & .MuiDataGrid-root .MuiTablePagination-toolbar":
          {
            minHeight: "36px",
          },
        "& .MuiDataGrid-windowContainer": {
          height: "36px",
        },
      },
    });
  });

export type GridProps = {
  rows: GridRowData[];
  columns: GridColDef[];
  selectedRow: string | number | undefined;
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
  selectedRow,
  setSelectedRow,
  handleColumnVisibilityChange,
  showSettings,
}: GridProps) => {
  const [height, setHeight] = useState<number>();
  const [pageParams, setPageParams] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 1, pageSize: 100 });

  const isSelectedRowInCurrentPage = useMemo(() => {
    if (selectedRow) {
      const selectedRowNumber =
        typeof selectedRow === "string" ? parseInt(selectedRow) : selectedRow;
      const selectedRowPage = Math.ceil(
        selectedRowNumber / pageParams.pageSize
      );
      console.log("selectedRowPage", selectedRowPage);
      return selectedRowPage == pageParams.page;
    }
    return false;
  }, [pageParams, selectedRow]);

  console.log("isSelectedRowInCurrentPage", isSelectedRowInCurrentPage);

  const classes = useStyles(
    height,
    !!selectedRow,
    isSelectedRowInCurrentPage
  )();
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
        disableColumnMenu
        onResize={(param) => {
          console.log("onResize", param);
          setHeight(param.containerSize.height);
        }}
        onPageChange={({ page, pageSize }) => {
          setPageParams({ page, pageSize });
        }}
        onPageSizeChange={({ page, pageSize }) => {
          setPageParams({ page, pageSize });
        }}
      />
    </div>
  );
};
