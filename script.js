// ==UserScript==
// @name         GitHub Close Issue Confirmation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a confirmation dialog before closing an issue on GitHub
// @author       leopoldhub
// @match        https://github.com/*
// @grant        none
// @icon         https://github.githubassets.com/favicons/favicon-dark.svg
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('submit', function(e) {
        if (e.target && e.target.querySelector('button[name*="close"][type="submit"]')) {
            if (!confirm('Are you sure you want to close this?')) {
                e.target.querySelector('button[name*="close"][type="submit"]').removeAttribute("disabled");
                e.preventDefault();
            }
        }
    });
})();
