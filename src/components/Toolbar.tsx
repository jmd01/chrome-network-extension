import {
  Box,
  FormControlLabel,
  IconButton,
  Switch,
  Typography,
  useTheme,
} from "@material-ui/core";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PauseIcon from "@material-ui/icons/Pause";
import React from "react";
import { Filter } from "./Filter";
import { FilterUnion } from "./types";
import { NetworkRequest } from "../App";

type ToolbarProps = {
  filters: FilterUnion[];
  setFilters: (value: FilterUnion[]) => void;
  setRequests: (value: NetworkRequest[]) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Toolbar = ({
  setRequests,
  isPaused,
  setIsPaused,
  filters,
  setFilters,
  setDarkMode,
}: ToolbarProps) => {
  const theme = useTheme();

  const handleChange = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Box
        display="flex"
        alignItems={"center"}
        style={{ gap: 12 }}
        mb={"4px"}
        mt={"4px"}
      >
        <Box style={{ borderRight: "1px solid #d8d8d8" }} pr={"6px"}>
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
        label={<Typography variant="body2">Dark</Typography>}
      />
    </Box>
  );
};
