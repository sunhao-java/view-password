/**
 * Created by sunhao on 2017/2/23.
 */
var cache = {};

chrome.browserAction.onClicked.addListener(function (tab) {
    var id = tab.id;
    var show = cache[id] == undefined ? false : cache[id];
    if (!show) {
        cache[tab.id] = true;

        chrome.browserAction.setIcon({
            path: '../icons/icon-enabled.png',
            tabId: tab.id
        });
        chrome.tabs.executeScript(tab.id, {file: "content.js", runAt: "document_end"});
    } else {
        cache[tab.id] = false;

        chrome.browserAction.setIcon({
            path: '../icons/icon-disabled.png',
            tabId: tab.id
        });

        chrome.tabs.executeScript(tab.id, {code: "var eles = document.getElementsByName('showPassword');for(var i = 0; i < eles.length; i++){eles[i].parentNode.removeChild(eles[i]);}"});
    }
});