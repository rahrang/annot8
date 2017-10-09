chrome.runtime.onInstalled.addListener(function() {
  // replace all rules
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // with a new rule
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // that fires when a page's URL contains "youtube.com"
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube.com' },
          })
        ],
        // show the extension's page action
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab){
     chrome.tabs.create({url: "localhost:3000", "active":true});
 });