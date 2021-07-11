import {
  Box,
  FormControlLabel,
  IconButton,
  Switch,
  useTheme,
} from "@material-ui/core";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PauseIcon from "@material-ui/icons/Pause";
import React from "react";
import { Filter } from "./Filter";
import { FilterUnion } from "./types";
import { NetworkRequest } from "../App";
import { Brightness6, Settings } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "&": {
      gap: 12,
    },
    "& .MuiSvgIcon-root": {
      fontSize: "1.2rem",
    },
    "& .MuiChip-root": {
      fontSize: "0.75rem",
      lineHeight: "1.53",
    },
  },
});

type ToolbarProps = {
  filters: FilterUnion[];
  setFilters: (value: FilterUnion[]) => void;
  setRequests: (value: NetworkRequest[]) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Toolbar = ({
  setRequests,
  isPaused,
  setIsPaused,
  filters,
  setFilters,
  setDarkMode,
  setShowSettings,
}: ToolbarProps) => {
  const theme = useTheme();
  const handleChange = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const classes = useStyles();

  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Box
        display="flex"
        alignItems={"center"}
        mb={"4px"}
        mt={"4px"}
        className={classes.root}
      >
        <Box style={{ borderRight: "1px solid #d8d8d8" }} px={"6px"}>
          <IconButton
            aria-label="settings"
            size={"small"}
            onClick={() => setShowSettings((settings) => !settings)}
          >
            <Settings />
          </IconButton>
        </Box>
        <Box
          display="flex"
          alignContent={"center"}
          style={{ borderRight: "1px solid #d8d8d8", gap: "6px" }}
          pr={"6px"}
        >
          <IconButton
            aria-label="clear"
            size={"small"}
            color={"secondary"}
            onClick={() => setRequests([])}
          >
            <NotInterestedIcon />
          </IconButton>
          <IconButton
            aria-label="clear"
            size={"small"}
            color={isPaused ? "primary" : undefined}
            onClick={() => setIsPaused(!isPaused)}
          >
            <PauseIcon />
          </IconButton>
        </Box>
        <Filter filters={filters} setFilters={setFilters} />
      </Box>
      <FormControlLabel
        control={
          <Switch
            checked={theme.palette.type === "dark"}
            onChange={handleChange}
            name="dark"
            color="primary"
            size={"small"}
          />
        }
        label={
          <IconButton aria-label="settings" size={"small"}>
            <Brightness6 />
          </IconButton>
        }
      />
    </Box>
  );
};
