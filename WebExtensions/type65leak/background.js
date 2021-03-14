// Disable pre-fetching
//  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network
browser.privacy.network.networkPredictionEnabled.set({
  value: false,
});

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    return { cancel: true };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
