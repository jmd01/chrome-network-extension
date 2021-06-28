import React from "react";
import { Story, Meta } from "@storybook/react";

import { Grid, GridProps } from "./Grid";
import { mockRequests } from "./mockData";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  requests: mockRequests.filter((req, index) => index >= 0),
};
