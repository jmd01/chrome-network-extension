import React, { useEffect, useState } from "react";
import { GridContainer } from "./GridContainer";

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

  return (
    <GridContainer
      requests={requests}
      setRequests={setRequests}
      isPaused={isPaused}
      setIsPaused={setIsPaused}
    />
  );
}

export default App;
