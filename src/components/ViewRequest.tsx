import { createStyles, Paper, Theme } from "@material-ui/core";
import { NetworkRequest } from "../App";
import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme: Theme) => {
//   return createStyles({
//     root: {
//       "&": {
//         zIndex: 1,
//         height: "90%",
//         width: "90%",
//         position: "absolute",
//         margin: "5%",
//       },
//     },
//   });
// });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
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

  console.log(requests, viewRowId, setViewRowId, request);
  const classes = useStyles();

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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Response Headers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Request Headers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Dialog>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
    </div>
  );
};
