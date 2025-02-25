import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview({ phoneNumber,cssClass,countrySelection}) {
    return <HelloWorldSample phoneNumber={phoneNumber} cssClass={cssClass} countrySelection={countrySelection}/>;
}

export function getPreviewCss() {
    return require("./ui/GetCountryName.css");
}
