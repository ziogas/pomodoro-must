chrome.extension.sendMessage({}, function(response) {

    // 10 seconds
    var checkInterval = 10000,
        queryForLoggedIn = '.user_name',
        queryForTimer = '#timer';

    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // If logged in
            if (document.querySelector(queryForLoggedIn)) {
                window.checkIfPomodoroRunning = function() {
                    var timer = document.querySelector(queryForTimer);
                    if (!timer || timer.style.display == 'none') {
                        chrome.runtime.sendMessage({
                            type: "notification",
                            options: {
                                type: "basic",
                                iconUrl: chrome.extension.getURL("icons/icon128.png"),
                                priority: 2,
                                title: chrome.i18n.getMessage("notification_title"),
                                message: chrome.i18n.getMessage("notification_message"),
                                contextMessage: chrome.i18n.getMessage("notification_context"),
                                buttons: [
                                    {title: chrome.i18n.getMessage("notification_button_start"),},
                                    {title: chrome.i18n.getMessage("notification_button_ignore"),}
                                ],
                                isClickable: false,
                                requireInteraction: true
                            }
                        }, function(response) {
                            window.setTimeout(window.checkIfPomodoroRunning, checkInterval);
                        });
                    } else {
                        window.setTimeout(window.checkIfPomodoroRunning, checkInterval);
                    }
                }

                window.setTimeout(window.checkIfPomodoroRunning, checkInterval);
            }

        }
    }, 10);
});
