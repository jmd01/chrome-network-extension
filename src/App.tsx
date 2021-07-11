import React, { useEffect, useState } from "react";
import { GridContainer } from "./components/GridContainer/GridContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import grey from "@material-ui/core/colors/grey";
import { Theme } from "@material-ui/core";

type ResponseContent = {
  content: string;
  encoding: string;
};
export type NetworkRequest = chrome.devtools.network.Request & {
  responseContent: ResponseContent;
};

function App() {
  const [requests, setRequests] = useState<NetworkRequest[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme: Theme = useTheme(darkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    // Devtools only exists within a devtools page, but need to run in a browser
    // for ease of testing
    if (!(chrome.devtools instanceof Object)) {
      return;
    }

    function onRequestFinish(request: chrome.devtools.network.Request) {
      if (isPaused) {
        return;
      }

      let index = 0;
      request.getContent((content, encoding) => {
        const responseContent: ResponseContent = { content, encoding };
        setRequests((requests) =>
          requests.map((request, i) => {
            return i === index
              ? {
                  ...request,
                  responseContent,
                }
              : request;
          })
        );
      });

      setRequests((requests) => {
        index = requests.length;
        return [
          ...requests,
          {
            ...request,
            responseContent: { content: "", encoding: "" },
          },
        ];
      });
    }

    chrome.devtools.network.onRequestFinished.addListener(onRequestFinish);
    return () => {
      chrome.devtools.network.onRequestFinished.removeListener(onRequestFinish);
    };
  }, [setRequests, requests, isPaused]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GridContainer
        requests={requests}
        setRequests={setRequests}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        setDarkMode={setDarkMode}
      />
    </ThemeProvider>
  );
}

export default App;

export const useTheme = (darkMode: boolean): Theme => {
  return React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          body2: { fontSize: 12 },
        },
        ...(darkMode
          ? {
              palette: {
                type: "dark",
                primary: grey,
              },
            }
          : { palette: { type: "light" } }),
      }),
    [darkMode]
  );
};
