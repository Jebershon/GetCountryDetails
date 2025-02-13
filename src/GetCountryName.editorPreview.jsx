import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview({ phoneNumber,cssClass}) {
    return <HelloWorldSample phoneNumber={phoneNumber} cssClass={cssClass}/>;
}

export function getPreviewCss() {
    return require("./ui/GetCountryName.css");
}
