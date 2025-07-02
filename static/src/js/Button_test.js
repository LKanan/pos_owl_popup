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

        // popup d'erreur
        // ==============
        // this.showPopup("ErrorPopup",{
        //     title: "Error message",
        //     body: "You have clicked the button successfully!",
        // })

        // popup de confirmation
        // ===================
        // const{confirmed} = await this.showPopup("ConfirmPopup",{
        //     title: "Error message",
        //     body: "You have clicked the button successfully!",
        //     confirmText: "OK",
        //     cancelText: "Cancel"
        // })
        // console.log("Button clicked! ", confirmed)

        // popup personnalisé utilisant le popup "OfflineErrorPopup"
        // =========================================================
        // this.showPopup("OfflineErrorPopup", {
        //     title: "Custom Popup",
        //     body: "Ceci est un popup personnalisé",
        // })

    //     popup de selection
    //     const {confirmed, payload:selectedOption}= await this.showPopup("SelectionPopup",{
    //         title: "Choisissez une option",
    //         body: "Sélectionnez une des options suivantes :",
    //         list: [
    //             { 'id':0 ,'label': "Option 1", 'item': "option1" },
    //             { 'id':0 ,'label': "Option 2", 'item': "option2" },
    //             { 'id':0 ,'label': "Option 3", 'item': "option3" },
    //         ],
    //         confirmText: "OK",
    //         cancelText: "Annuler"
    //     })
    //
    //     console.log(confirmed, selectedOption)
    //     const info = await this.env.pos.getClosePosInfo()
    //     this.showPopup("ClosePosPopup", {
    //         info: info,
    //         keepBehind: true,
    //     })
        this.showPopup("EditListPopup", {
            title: "Edit List Popup",
            // info: info,
            // keepBehind: true,
        })
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
