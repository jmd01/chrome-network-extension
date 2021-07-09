import { Box, createStyles, IconButton, Theme } from "@material-ui/core";
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
import { ReactJsonView } from "./GridContainer/GridContainer";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

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
        borderBottom: `1px solid ${theme.palette.grey["300"]}`,
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
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
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
    },
  })
);

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
    if (viewRowId !== undefined) {
      const requestIndex =
        typeof viewRowId === "string" ? parseInt(viewRowId) : viewRowId;
      return requests.length > requestIndex
        ? requests[requestIndex]
        : undefined;
    }
  }, [requests, viewRowId]);

  const onRightClick = useCallback(
    () =>
      typeof viewRowId === "number" &&
      viewRowId < requests.length - 1 &&
      setViewRowId(viewRowId + 1),
    [viewRowId, setViewRowId]
  );
  const onLeftClick = useCallback(
    () =>
      viewRowId && typeof viewRowId === "number" && setViewRowId(viewRowId - 1),
    [requests, viewRowId]
  );

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

  // console.log(viewRowId, request);

  return (
    <Dialog
      open={!!request}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setViewRowId(undefined)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth={"xl"}
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
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    General (ID: {viewRowId})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Row
                    title={"Request URL"}
                    description={request.request.url}
                  />
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
              <Accordion defaultExpanded>
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
              <Accordion defaultExpanded>
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
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>
                    Request Payload
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ResponseContent content={request.responseContent.content} />
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
};

const ResponseContent = ({ content }: ResponseContentProps) => {
  const classes = useStyles();

  try {
    const jsonValue = JSON.parse(content);
    return (
      <Typography className={classes.requestDescription}>
        <ReactJsonView value={jsonValue} />
      </Typography>
    );
  } catch {
    return (
      <Typography className={classes.requestDescription}>
        {content ? content : "No response"}
      </Typography>
    );
  }
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
