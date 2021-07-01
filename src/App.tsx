import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { GridContainer } from "./GridContainer";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PauseIcon from "@material-ui/icons/Pause";

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

  console.log(requests);

  return (
    <div className="App">
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
      <GridContainer requests={requests} setRequests={setRequests} />
    </div>
  );
}

export default App;
