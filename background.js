chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
// function checkForValidUrl(tabId, changeInfo, tab) {
// // If the tabs url starts with "http://specificsite.com"...
// 	if (tab.url.indexOf('https://www.youtube.com') == 0) {
// // ... show the page action.
// 		chrome.pageAction.show(tabId);
// 	}
// };

// // Listen for any changes to the URL of any tab.
// chrome.tabs.onUpdated.addListener(checkForValidUrl);