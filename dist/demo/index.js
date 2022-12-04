//sample
define(["require", "exports", "../src/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { DropDownList } from "../src/DropDownList/Base/dropdownlist";
    // import { DropDownList } from "../dist/bundle"; // after build
    // import { ComponentBase } from "../../../node_modules/edc_base_ts/src/Base/component";
    let dataSource = ['vasanth', 'gokul', 'kumar', 'pappitha'];
    let sampleDD = new index_1.Input({
        width: "300px",
        height: "30px",
        value: "vasanth"
    });
    sampleDD.appendTo('dd');
});
