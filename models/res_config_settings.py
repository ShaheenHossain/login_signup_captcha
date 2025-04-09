from odoo import models, fields

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    recaptcha_site_key = fields.Char(string='reCAPTCHA Site Key', config_parameter='your_module.recaptcha_site_key')
    recaptcha_secret_key = fields.Char(string='reCAPTCHA Secret Key', config_parameter='your_module.recaptcha_secret_key')
