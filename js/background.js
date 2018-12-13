'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({myonoffswitch: '1'}, function() {
    console.log('The extension is active');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'portals.veracross.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});