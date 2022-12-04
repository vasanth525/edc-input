define(["require", "exports", "edc_base_ts"], function (require, exports, edc_base_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Input = void 0;
    //component
    class Input extends edc_base_ts_1.ComponentBase {
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
    exports.Input = Input;
});
// Write TypeScript code!
