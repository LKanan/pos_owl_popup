# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class pos_owl_popup(models.Model):
#     _name = 'pos_owl_popup.pos_owl_popup'
#     _description = 'pos_owl_popup.pos_owl_popup'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
