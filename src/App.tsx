import React, { useEffect, useState } from "react";
import "./App.css";
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
  const [postDataColumns, setPostDataColumns] = useState<Set<string>>(
    new Set<string>()
  );

  useEffect(() => {
    function onRequestFinish(request: chrome.devtools.network.Request) {
      // TODO: Limit store by size
      // request.getContent((content, encoding) => {
      //     const responseContent: ResponseContent = {content, encoding};
      //     const index = requests.length
      //     setRequests((requests) => requests.map((request, i) => {
      //         return i === index ? {
      //             ...request,
      //             responseContent
      //         } : request;
      //     }))
      // });
      const slimRequest: NetworkRequest = {
        ...request,
        // ...(request._initiator ? {_initiator: undefined} : {}),
        responseContent: { content: "", encoding: "" },
      };
      setRequests((requests) => [...requests, slimRequest]);

      const updatedPostDataColumns = postDataColumns;
      if (
        request.request.postData?.text &&
        request.request.postData?.mimeType === "application/json"
      ) {
        const parsedPostData = JSON.parse(request.request.postData.text);
        console.log(parsedPostData);
      }
      // updatedPostDataColumns.add()
      // setPostDataColumns()
    }

    chrome.devtools.network.onRequestFinished.addListener(onRequestFinish);
    return () => {
      chrome.devtools.network.onRequestFinished.removeListener(onRequestFinish);
    };
  }, [setRequests, requests]);

  console.log(requests);

  const updatedPostDataColumns = postDataColumns;

  return (
    <div className="App">
      {requests.length > 0
        ? requests.map((request) => <div>url: {request.request.url}</div>)
        : "No requests"}
      <GridContainer requests={requests} />
    </div>
  );
}

export default App;
