import { Box, IconButton } from "@material-ui/core";
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
};
export const Toolbar = ({
  setRequests,
  isPaused,
  setIsPaused,
  filters,
  setFilters,
}: ToolbarProps) => {
  return (
    <Box>
      <Box>
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
      <Box>
        <Filter filters={filters} setFilters={setFilters} />
      </Box>
    </Box>
  );
};
