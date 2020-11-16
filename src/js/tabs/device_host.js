'use strict';

TABS.device_host = {};
TABS.device_host.initialize = function(callback) {
    // set current tab in GUI to device host
    if (GUI.active_tab != 'device_host') {
        GUI.active_tab = 'device_host';
    }

    $('#content').load("./tabs/device_host.html", function () {
        GUI.content_ready(callback);
    });
};

TABS.device_host.cleanup = function (callback) {
    if (callback) callback();
};