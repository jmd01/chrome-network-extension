async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo?.status === "loading") {
    // getCurrentTab().then((tab) => {
    //   if (tab.id === tabId) {
    //     chrome.runtime.sendMessage({ tabId });
    //   }
    // });
    // chrome.runtime.sendMessage({ tabId });
  }
});
