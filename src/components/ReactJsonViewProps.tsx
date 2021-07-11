import { useTheme } from "@material-ui/core";
import ReactJson from "react-json-view";
import React from "react";

type ReactJsonViewProps = {
  value: object;
};
export const ReactJsonView = ({ value }: ReactJsonViewProps) => {
  const theme = useTheme();
  return (
    <ReactJson
      src={value}
      name={null}
      displayDataTypes={false}
      displayObjectSize={false}
      quotesOnKeys={false}
      theme={theme.palette.type === "light" ? "rjv-default" : "summerfruit"}
    />
  );
};
