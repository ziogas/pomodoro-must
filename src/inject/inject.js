chrome.extension.sendMessage({}, function(response) {

    // 20 seconds
    var checkInterval = 20000;

    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            if (isLoggedIn()) {
                window.checkIfPomodoroRunning = function() {
                    if (!isTimerRunning()) {
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
                    // If timer is running we can check later
                    } else {
                        window.setTimeout(window.checkIfPomodoroRunning, checkInterval*3);
                    }
                }

                window.setTimeout(window.checkIfPomodoroRunning, checkInterval);
            }

        }
    }, 10);

    function isLoggedIn() {
        return !!(document.querySelector('.user_name'));
    }

    function isTimerRunning() {
        var timer = document.querySelector('#timer');
        if (!timer || timer.style.display == 'none') {
            return false;
        }

        return true;
    }
});
