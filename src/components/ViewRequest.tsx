import { createStyles, Paper, Theme } from "@material-ui/core";
import { NetworkRequest } from "../App";
import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      "&": {
        zIndex: 1,
        height: "90%",
        width: "90%",
        position: "absolute",
        margin: "5%",
      },
    },
  });
});

type ViewRequestProps = {
  requests: NetworkRequest[];
  viewRowId: string | number | undefined;
  setViewRowId: (value: string | number | undefined) => void;
};
export const ViewRequest = ({
  requests,
  viewRowId,
  setViewRowId,
}: ViewRequestProps) => {
  const request = useMemo(() => {
    if (viewRowId) {
      const requestIndex =
        typeof viewRowId === "string" ? parseInt(viewRowId) : viewRowId;
      return (
        viewRowId && requests.length > requestIndex && requests[requestIndex]
      );
    }
  }, [requests, viewRowId]);

  console.log(request);
  const classes = useStyles();

  return (
    <Paper
      elevation={3}
      className={classes.root}
      onClick={() => setViewRowId(undefined)}
    >
      View request
    </Paper>
  );
};
