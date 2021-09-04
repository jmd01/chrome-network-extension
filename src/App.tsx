import React, { useCallback, useEffect, useState } from "react";
import { GridContainer } from "./components/GridContainer/GridContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import grey from "@material-ui/core/colors/grey";
import { Theme } from "@material-ui/core";
import {
  NetworkRequest,
  OptimisationConfig,
  ResponseContentType,
} from "./types";
import { useDebounce } from "use-debounce";

function App() {
  const [previousUrl, setPreviousUrl] = useState<string>();
  const [requests, setRequests] = useState<NetworkRequest[]>([]);
  const [debouncedRequests, controlFns] = useDebounce(requests, 2000, {
    maxWait: 2000,
  });

  const [isPaused, setIsPaused] = useState(false);
  const [preserveLog, setPreserveLog] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const [optimisationConfig, setOptimisationConfig] =
    useState<OptimisationConfig>({
      dynamicPostDataColumns: false,
      showResponseColumn: true,
      debounceGridRenders: 2,
    });

  // console.count("App");

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
      if (optimisationConfig.showResponseColumn) {
        request.getContent((content, encoding) => {
          const responseContent: ResponseContentType = { content, encoding };
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
      }

      setRequests((requests) => {
        index = requests.length;
        return [
          ...requests,
          {
            ...request,
            responseContent: { content: "", encoding: "" },
            responseContentPromise: new Promise((resolve) => {
              request.getContent((content, encoding) =>
                resolve({ content, encoding })
              );
            }),
          },
        ];
      });
    }

    chrome.devtools.network.onRequestFinished.addListener(onRequestFinish);
    return () => {
      chrome.devtools.network.onRequestFinished.removeListener(onRequestFinish);
    };
  }, [optimisationConfig.showResponseColumn, setRequests, requests, isPaused]);

  const clearLog = useCallback(
    () => {
      setRequests([]);
      controlFns.flush();
    },
    // controlFns is not referentially equal
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setRequests]
  );

  useEffect(() => {
    function onMessage({
      tabId,
      changeInfoUrl,
    }: {
      tabId: number;
      changeInfoUrl: string | undefined;
    }) {
      if (!preserveLog && tabId === chrome.devtools.inspectedWindow.tabId) {
        if (!changeInfoUrl) {
          clearLog();
        }

        if (changeInfoUrl && previousUrl) {
          try {
            const previousUrlObj = new URL(previousUrl);
            const changeInfoUrlObj = new URL(changeInfoUrl);
            if (
              previousUrlObj.host + previousUrlObj.pathname !==
              changeInfoUrlObj.host + changeInfoUrlObj.pathname
            ) {
              clearLog();
            }
          } catch (e) {
            console.error(e);
          }
        }
        setPreviousUrl(changeInfoUrl);
      }
    }

    chrome.runtime.onMessage.addListener(onMessage);
    return () => chrome.runtime.onMessage.removeListener(onMessage);
  }, [preserveLog, clearLog, previousUrl]);

  // console.log(debouncedRequests);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GridContainer
        requests={debouncedRequests}
        clearLog={clearLog}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        preserveLog={preserveLog}
        setPreserveLog={setPreserveLog}
        setDarkMode={setDarkMode}
        optimisationConfig={optimisationConfig}
        setOptimisationConfig={setOptimisationConfig}
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
