# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class RecaptchaVerification(http.Controller):

    @http.route('/web/recaptcha/verify', type='json', auth='none')
    def verify_recaptcha(self, token, action):
        if not token:
            return {'success': False, 'error': 'No token provided'}

        ip_addr = request.httprequest.remote_addr
        result = request.env['ir.http']._verify_recaptcha_token(ip_addr, token, action)

        if result in ['is_human', 'no_secret']:
            return {'success': True}
        else:
            return {'success': False, 'error': 'CAPTCHA verification failed'}