/** @odoo-module */
import PosComponent from "point_of_sale.PosComponent"
import ProductScreen from "point_of_sale.ProductScreen"
import Registries from "point_of_sale.Registries"
const { useListener } = require("@web/core/utils/hooks");

class ButtonTest extends PosComponent {
    static template = "ButtonTest"
    setup(){
        super.setup()
        useListener("click", this.button_test_click)
    }

    async button_test_click() {
        // Les types de popup disponibles sont :
        // - "ErrorPopup"
        // - "ConfirmPopup"

        // this.showPopup("ErrorPopup",{
        //     title: "Error message",
        //     body: "You have clicked the button successfully!",
        // })

        const{confirmed} = await this.showPopup("ConfirmPopup",{
            title: "Error message",
            body: "You have clicked the button successfully!",
            confirmText: "OK",
            cancelText: "Cancel"
        })
        console.log("Button clicked! ", confirmed)
    }
}
Registries.Component.add(ButtonTest)

ProductScreen.addControlButton({
    component: ButtonTest,
    position: ["before", "OrderlineCustomerNoteButton"]
})

// odoo.define("pos_owl_popup.ButtonTest", function (require){
//     "use strict"
//     const PosComponent = require("point_of_sale.PosComponent")
//     const ProductScreen = require("point_of_sale.ProductScreen")
//     const Registries = require("point_of_sale.Registries")
//
//     class ButtonTest extends PosComponent{}
//
//     ButtonTest.template = "ButtonTest"
//     ProductScreen.addControlButton({
//         component:ButtonTest,
//         position:["before","OrderLineCustomerNoteButton"]
//     })
//     Registries.Component.add(ButtonTest)
//
//     return ButtonTest
// })
