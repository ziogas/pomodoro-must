var NOTIFICATION_ID = 'pomodoro-must-notification';
var IGNORING_SECONDS = 300;
var TOMATO_TAB_ID;
var IGNORED_TILL;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var now = (new Date().getTime()/1000);

    if (request.type == "notification" && (!IGNORED_TILL || IGNORED_TILL < now)) {

        // Save the tab id to react on button clicks
        TOMATO_TAB_ID = sender.tab.id;

        // To prevent notifications flood clear everything first
        chrome.notifications.clear(NOTIFICATION_ID, function() {
            chrome.notifications.create(NOTIFICATION_ID, request.options, function(notificationId) {
                sendResponse();
            });
        });
    } else {
        sendResponse();
    }
});

chrome.notifications.onButtonClicked.addListener(function(notificationId, buttonIndex) {
    if (TOMATO_TAB_ID && notificationId == NOTIFICATION_ID) {

        chrome.notifications.clear(NOTIFICATION_ID, function() {
            // Main button, force tab to show up
            if (buttonIndex == 0) {
                chrome.tabs.update(TOMATO_TAB_ID, {"active": true}, function(tab){ });
                IGNORED_TILL = null;
            // Ignore
            } else {
                IGNORED_TILL = (new Date().getTime()/1000) + IGNORING_SECONDS;
            }
        });
    }
});
