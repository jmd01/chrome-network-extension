chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo?.status === "loading") {
    chrome.runtime.sendMessage({ tabId });
  }
});
