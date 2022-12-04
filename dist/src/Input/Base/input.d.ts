import { ComponentBase } from "edc_base_ts";
import { IInput } from "./interface";
export declare class Input extends ComponentBase {
    element?: HTMLElement | undefined;
    inputObj: IInput | undefined;
    constructor(sampleObj?: IInput, element?: HTMLElement | undefined);
    render(): void;
    private createInput;
}
