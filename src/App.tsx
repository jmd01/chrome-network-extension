import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
type ResponseContent = {
  content: string;
  encoding: string;
};
type Request = chrome.devtools.network.Request & {
  responseContent: ResponseContent;
};

function App() {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    function onRequestFinish(request: chrome.devtools.network.Request) {
      let responseContent: ResponseContent = { content: "", encoding: "" };
      request.getContent((content, encoding) => {
        console.log("content", content);
        responseContent = { content, encoding };
      });
      setRequests((requests) => [...requests, { ...request, responseContent }]);
    }
    chrome.devtools.network.onRequestFinished.addListener(onRequestFinish);
    return () =>
      chrome.devtools.network.onRequestFinished.removeListener(onRequestFinish);
  }, [setRequests]);

  console.log(requests);

  return (
    <div className="App">
      {requests.length > 0
        ? requests.map((request) => (
            <div>
              url: {request.request.url}, content:
              {request.getContent((content, encoding) => {
                return `content: ${content}, encoding: ${encoding}`;
              })}{" "}
            </div>
          ))
        : "No requests"}
    </div>
  );
}

export default App;
