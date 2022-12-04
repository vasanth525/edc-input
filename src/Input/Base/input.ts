// import { ComponentBase } from "../../Base/component";
import { ComponentBase } from "edc_base_ts";
import { IInput } from "./interface";

//component

export class Input extends ComponentBase {
  inputObj: IInput | undefined;
  constructor(sampleObj?: IInput, public element?: HTMLElement) {
    super(element);
    this.inputObj = sampleObj;
  }
  
  public render() {
    this.createInput();
  }

  private createInput() {
    let inputElement: HTMLElement = document.createElement("input");
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
