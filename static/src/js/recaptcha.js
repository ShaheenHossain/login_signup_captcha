odoo.define('login_signup_captcha.recaptcha', function(require) {
    "use strict";

    var $ = require('jquery');

    function enableSignupButton() {
        var verifiedTime = localStorage.getItem('captcha_verified_time');
        var now = new Date().getTime();
        var maxAge = 86400000; // 24 hours in milliseconds
        var btn = document.querySelector('button[type="submit"]');
        var errorBox = document.getElementById('signup_err');

        // Use explicit comparison to handle both conditions separately
        var timeDifference = now - parseInt(verifiedTime);
        var isVerified = (verifiedTime !== null && !isNaN(verifiedTime));

        // Only enable if the captcha was verified within 24 hours
        if (isVerified && timeDifference < maxAge) {
            btn.disabled = false;
            errorBox.innerText = '';
        } else {
            btn.disabled = true;
            errorBox.innerText = 'Please verify the captcha again.';
        }
    }

    function disableSignupButton() {
        var btn = document.querySelector('button[type="submit"]');
        btn.disabled = true;
    }

    // Expose functions to be used in the HTML
    window.enableSignupButton = enableSignupButton;
    window.disableSignupButton = disableSignupButton;
});
