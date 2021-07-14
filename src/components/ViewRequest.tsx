import {
  Box,
  createStyles,
  Divider,
  IconButton,
  Theme,
} from "@material-ui/core";
import { NetworkRequest } from "../App";
import React, { useCallback, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { GridRowData } from "@material-ui/data-grid";
import { ReactJsonView } from "./ReactJsonView";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& .MuiAccordionDetails-root": {
        flexDirection: "column",
        padding: "0 16px 4px 16px",
      },

      "& .MuiAccordion-root": {
        color:
          theme.palette.type === "light"
            ? theme.palette.grey["700"]
            : theme.palette.grey["300"],
        borderBottom: `1px solid ${
          theme.palette.type === "light"
            ? theme.palette.grey["300"]
            : theme.palette.grey["700"]
        }`,
        background:
          theme.palette.type === "light"
            ? theme.palette.background
            : theme.palette.grey["800"],
      },
      "& .MuiAccordion-root:before": {
        background: "none",
      },
      "& .MuiAccordion-rounded:last-child": {
        borderColor: "transparent",
      },
      "& .MuiAccordion-root.Mui-expanded": {
        margin: 0,
      },
      "& .MuiAccordionSummary-content.Mui-expanded": {
        margin: 0,
      },
      "& .MuiAccordionSummary-root.Mui-expanded": {
        minHeight: 0,
      },
      "& .MuiPaper-elevation1": {
        boxShadow: "none",
      },
      "& .nav-box": {
        width: "30px",
        flexShrink: 0,
        background:
          theme.palette.type === "light"
            ? theme.palette.grey["100"]
            : theme.palette.grey["700"],
      },
      "& .nav-box:hover": {
        background:
          theme.palette.type === "light"
            ? theme.palette.grey["200"]
            : theme.palette.grey["600"],
        cursor: "pointer",
      },
      "& .react-json-view": {
        whiteSpace: "normal",
        wordBreak: "break-all",
      },
      "& .react-json-view .icon-container": {
        lineHeight: "0!important",
        verticalAlign: "middle!important",
      },
      "& .react-json-view .object-meta-data": {
        position: "relative",
      },
      "& .react-json-view .copy-to-clipboard-container": {
        position: "absolute",
        zIndex: 99,
      },
      "& .react-json-view .object-meta-data .copy-to-clipboard-container": {
        top: "-10px!important",
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color:
        theme.palette.type === "light"
          ? theme.palette.grey["800"]
          : theme.palette.grey["200"],
    },
    requestTitle: {
      fontSize: 12,
      fontWeight: "bold",
      color:
        theme.palette.type === "light"
          ? theme.palette.grey["900"]
          : theme.palette.grey["100"],
    },
    requestDescription: {
      fontSize: 12,
      color:
        theme.palette.type === "light"
          ? theme.palette.grey["700"]
          : theme.palette.grey["100"],
      "& .react-json-view": {
        backgroundColor: "transparent!important",
      },
    },
  })
);

type ViewRequestProps = {
  requests: NetworkRequest[];
  filteredRows: GridRowData[];
  viewRowId: string | number | undefined;
  setViewRowId: (value: string | number | undefined) => void;
};
export const ViewRequest = ({
  requests,
  filteredRows,
  viewRowId,
  setViewRowId,
}: ViewRequestProps) => {
  const request = useMemo(() => {
    if (viewRowId !== undefined) {
      const requestIndex =
        typeof viewRowId === "string" ? parseInt(viewRowId) : viewRowId;
      return requests.length > requestIndex
        ? requests[requestIndex]
        : undefined;
    }
  }, [requests, viewRowId]);

  const onRightClick = useCallback(() => {
    if (typeof viewRowId === "number") {
      const currentRowIndex = filteredRows.findIndex(
        ({ id }) => id === viewRowId
      );
      const nextRowIndex = currentRowIndex > -1 ? currentRowIndex + 1 : null;
      if (nextRowIndex && nextRowIndex < filteredRows.length) {
        setViewRowId(filteredRows[nextRowIndex].id);
      }
    }
  }, [viewRowId, filteredRows, setViewRowId]);

  const onLeftClick = useCallback(() => {
    if (typeof viewRowId === "number") {
      const currentRowIndex = filteredRows.findIndex(
        ({ id }) => id === viewRowId
      );
      if (currentRowIndex > 0) {
        const prevRowIndex = currentRowIndex - 1;
        setViewRowId(filteredRows[prevRowIndex].id);
      }
    }
  }, [filteredRows, setViewRowId, viewRowId]);

  useEffect(() => {
    const handleArrowKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onLeftClick();
      }
      if (e.key === "ArrowRight") {
        onRightClick();
      }
    };

    window.addEventListener("keydown", handleArrowKeyPress);

    return () => {
      window.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, [onLeftClick, onRightClick]);

  const classes = useStyles();

  return (
    <Dialog
      open={!!request}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setViewRowId(undefined)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth={"md"}
    >
      {request && (
        <div className={classes.root}>
          <Box display={"flex"}>
            <Box className={"nav-box"} onClick={onLeftClick}>
              <IconButton
                aria-label="clear"
                size={"small"}
                disabled={!viewRowId}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                }}
              >
                <ChevronLeft />
              </IconButton>
            </Box>
            <Box>
              <Box padding={"16px"}>
                <Typography className={classes.heading}>
                  {request.request.url} <code>(ID: {viewRowId})</code>
                </Typography>
              </Box>
              <Divider />
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>Request</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ResponseContent
                    content={request.request.postData?.text ?? ""}
                    type={"request"}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography className={classes.heading}>Response</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ResponseContent
                    content={request.responseContent.content}
                    type={"response"}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>General</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Row
                    title={"Request Method"}
                    description={request.request.method}
                  />
                  <Row
                    title={"Status Code"}
                    description={request.response.status}
                  />
                  <Row
                    title={"Remote Address"}
                    description={request.serverIPAddress}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>
                    Request Headers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {request.request.headers.map(({ name, value }, index) => (
                    <Row key={index} title={name} description={value} />
                  ))}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Response Headers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {request.response.headers.map(({ name, value }, index) => (
                    <Row key={index} title={name} description={value} />
                  ))}
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box className={"nav-box"} onClick={onRightClick}>
              <IconButton
                aria-label="clear"
                size={"small"}
                disabled={
                  typeof viewRowId !== "number" ||
                  viewRowId >= requests.length - 1
                }
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </div>
      )}
    </Dialog>
  );
};

type RowProps = {
  title: string;
  description: string | number | undefined;
};
const Row = ({ title, description }: RowProps) => {
  const classes = useStyles();

  return (
    <Box
      display={"flex"}
      alignContent={"center"}
      style={{ gap: 4 }}
      paddingBottom={"4px"}
    >
      <Typography className={classes.requestTitle}>{title}:</Typography>
      <Typography className={classes.requestDescription}>
        {description}
      </Typography>
    </Box>
  );
};

type ResponseContentProps = {
  content: string;
  type: "request" | "response";
};

const ResponseContent = ({ content, type }: ResponseContentProps) => {
  const classes = useStyles();

  try {
    const jsonValue = JSON.parse(content);
    return (
      <Typography component={"div"} className={classes.requestDescription}>
        <ReactJsonView value={jsonValue} />
      </Typography>
    );
  } catch {
    return (
      <Typography className={classes.requestDescription}>
        {content ? content : `No ${type} content`}
      </Typography>
    );
  }
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
