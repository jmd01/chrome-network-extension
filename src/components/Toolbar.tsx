import {
  Box,
  FormControlLabel,
  IconButton,
  Switch,
  useTheme,
} from "@material-ui/core";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PauseIcon from "@material-ui/icons/Pause";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import React from "react";
import { Filter } from "./Filter";
import { FilterUnion, NetworkRequest, OptimisationConfig } from "../types";
import { makeStyles } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
  optimisationConfig: OptimisationConfig;
  setOptimisationConfig: (value: OptimisationConfig) => void;
};
export const Toolbar = ({
  setRequests,
  isPaused,
  setIsPaused,
  filters,
  setFilters,
  setDarkMode,
  setShowSettings,
  optimisationConfig,
  setOptimisationConfig,
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
            <SettingsIcon />
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
        <OptimisationSettings
          optimisationConfig={optimisationConfig}
          setOptimisationConfig={setOptimisationConfig}
        />
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
            <Brightness6Icon />
          </IconButton>
        }
      />
    </Box>
  );
};

type OptimisationSettingsProps = {
  optimisationConfig: OptimisationConfig;
  setOptimisationConfig: (value: OptimisationConfig) => void;
};
const OptimisationSettings = ({
  optimisationConfig,
  setOptimisationConfig,
}: OptimisationSettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="clear"
        size={"small"}
        color={"primary"}
        onClick={handleClick}
      >
        <TuneIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={optimisationConfig.dynamicPostDataColumns}
                onChange={() =>
                  setOptimisationConfig({
                    ...optimisationConfig,
                    dynamicPostDataColumns:
                      !optimisationConfig.dynamicPostDataColumns,
                  })
                }
                name="dark"
                color="primary"
                size={"small"}
              />
            }
            label={"Split Post data into separate columns"}
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={optimisationConfig.showResponseColumn}
                onChange={() =>
                  setOptimisationConfig({
                    ...optimisationConfig,
                    showResponseColumn: !optimisationConfig.showResponseColumn,
                  })
                }
                name="dark"
                color="primary"
                size={"small"}
              />
            }
            label={"Render Response column"}
          />
        </MenuItem>
      </Menu>
    </>
  );
};
