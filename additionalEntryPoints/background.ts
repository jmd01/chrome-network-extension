chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo?.status === "loading") {
    chrome.runtime.sendMessage({ tabId, changeInfoUrl: changeInfo?.url });
  }
});
