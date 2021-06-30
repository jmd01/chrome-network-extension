import React from "react";
import { Meta, Story } from "@storybook/react";

import { Grid } from "./Grid";
import { mockRequests } from "./mockData";
import { GridContainer, GridContainerProps } from "./GridContainer";

const FullScreen = (Story: any) => (
  <div style={{ height: "100vh" }}>{Story()}</div>
);

export default {
  title: "Grid",
  component: Grid,
  decorators: [FullScreen],
} as Meta;

const Template: Story<GridContainerProps> = (args) => (
  <GridContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  requests: mockRequests.filter((req, index) => index > -1),
};
