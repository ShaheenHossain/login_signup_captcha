# -*- coding: utf-8 -*-
{
    'name': 'Login/signup reCAPTCHA',
    'version': '1.0',
    'summary': """Login and signup with google reCAPTCHA""",
    'description': """reCAPTCHA """,
    'author': 'Md. Shaheen Hossain',
    'company': 'Eagle ERP',
    'website': 'https://www.eagle-erp.com',
    'category': 'Extra Tools',
    'depends': ['base', 'web', 'auth_signup', 'google_recaptcha'],
    'license': 'LGPL-3',
    'depends': ['base','web'],
    'data': ['views/captcha_views.xml'],

    'assets': {
        'web.assets_frontend': [
           # 'login_signup_captcha/static/src/js/login_captcha.js',
           # 'login_signup_captcha/static/src/js/recaptcha.js',
        ],
    },

    'installable': True,
    'auto_install': False,
}