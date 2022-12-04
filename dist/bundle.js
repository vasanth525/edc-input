(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('edc_base_ts')) :
    typeof define === 'function' && define.amd ? define(['exports', 'edc_base_ts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.edc_input_ts = {}, global.edc_base_ts));
})(this, (function (exports, edc_base_ts) { 'use strict';

    // import { ComponentBase } from "../../Base/component";
    //component
    class Input extends edc_base_ts.ComponentBase {
        element;
        inputObj;
        constructor(sampleObj, element) {
            super(element);
            this.element = element;
            this.inputObj = sampleObj;
        }
        render() {
            this.createInput();
        }
        createInput() {
            let inputElement = document.createElement("input");
            if (this.inputObj?.value) {
                inputElement.setAttribute("value", this.inputObj.value.toString());
            }
            inputElement.style.width = this.inputObj && this.inputObj.width ? this.inputObj.width : "180px";
            inputElement.style.height = this.inputObj && this.inputObj.height ? this.inputObj.height : "25px";
            inputElement.setAttribute("readonly", "");
            this.element = inputElement;
        }
    }
    // Write TypeScript code!

    exports.Input = Input;

}));
