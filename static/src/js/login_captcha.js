/** @odoo-module **/

import { ReCaptcha } from "@google_recaptcha/js/recaptcha";
import { whenReady } from "@web/core/utils/functions";

whenReady(async () => {
    const $loginForm = document.querySelector('form#login');
    if (!$loginForm) return;

    const captcha = new ReCaptcha();
    await captcha.loadLibs();

    $loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const result = await captcha.getToken('login');
        if (result.token) {
            const tokenField = document.createElement('input');
            tokenField.type = 'hidden';
            tokenField.name = 'recaptcha_token_response';
            tokenField.value = result.token;
            $loginForm.appendChild(tokenField);
            $loginForm.submit();
        } else {
            alert(result.error || result.message || "reCAPTCHA validation failed.");
        }
    });
});
