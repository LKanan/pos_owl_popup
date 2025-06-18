# -*- coding: utf-8 -*-
# from odoo import http


# class PosOwlPopup(http.Controller):
#     @http.route('/pos_owl_popup/pos_owl_popup', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pos_owl_popup/pos_owl_popup/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('pos_owl_popup.listing', {
#             'root': '/pos_owl_popup/pos_owl_popup',
#             'objects': http.request.env['pos_owl_popup.pos_owl_popup'].search([]),
#         })

#     @http.route('/pos_owl_popup/pos_owl_popup/objects/<model("pos_owl_popup.pos_owl_popup"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pos_owl_popup.object', {
#             'object': obj
#         })
