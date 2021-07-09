import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Grid } from "../Grid";
import { mockRequests } from "./mockData";
import { GridContainer, GridContainerProps } from "./GridContainer";
import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import grey from "@material-ui/core/colors/grey";

const FullScreen = (Story: any) => (
  <div style={{ height: "100vh" }}>{Story()}</div>
);

type ThemeArg = {
  theme: "light" | "dark";
};

export default {
  title: "Grid",
  component: Grid,
  decorators: [FullScreen],
} as Meta;

const Template: Story<GridContainerProps & ThemeArg> = (args) => {
  const { requests, ...rest } = args;
  const theme: Theme = React.useMemo(
    () =>
      createMuiTheme(
        args.theme === "light"
          ? {
              palette: {
                type: "light",
              },
            }
          : {
              palette: {
                type: "dark",
                primary: grey,
              },
            }
      ),
    []
  );

  const [liveRequests, setLiveRequests] = useState(requests);

  useEffect(() => {
    setTimeout(() => {
      if (mockRequests.length > liveRequests.length) {
        setLiveRequests([...liveRequests, mockRequests[liveRequests.length]]);
      }
    }, 1000);
  }, [liveRequests, setLiveRequests]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GridContainer {...rest} requests={liveRequests} />
    </ThemeProvider>
  );
};

export const Light = Template.bind({});
Light.args = {
  theme: "light",
  requests: mockRequests.filter((req, index) => index > -1),
};
export const Dark = Template.bind({});
Dark.args = {
  theme: "dark",
  requests: mockRequests.filter((req, index) => index > -1),
};
export const Live = Template.bind({});
Live.args = {
  theme: "light",
  requests: [],
};
