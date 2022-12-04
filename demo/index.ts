//sample

import { Input, IborderStyle } from "../src/index";
// import { DropDownList } from "../src/DropDownList/Base/dropdownlist";
// import { DropDownList } from "../dist/bundle"; // after build
// import { ComponentBase } from "../../../node_modules/edc_base_ts/src/Base/component";

let dataSource: string[] = ['vasanth', 'gokul', 'kumar', 'pappitha'];

let sampleDD: Input = new Input({
  width: "300px",
  height: "30px",
  value: "vasanth"
});
sampleDD.appendTo('dd');