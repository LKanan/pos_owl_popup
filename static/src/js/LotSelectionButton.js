/** @odoo-module */
import PosComponent from "point_of_sale.PosComponent"
import Registries from "point_of_sale.Registries"
const { useListener } = require("@web/core/utils/hooks");

class LotSelectionButton extends PosComponent {
    static template = "LotSelectionButton"
    setup(){
        super.setup()
        useListener("click", this.button_click)
    }

    async button_click() {

        this.showPopup("LotSelectionPopup", {
            title: "Liste des lots",
            // info: info,
            // keepBehind: true,
        })
    }
}
Registries.Component.add(LotSelectionButton)
