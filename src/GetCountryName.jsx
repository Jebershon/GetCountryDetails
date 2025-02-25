import { createElement } from "react";
import React from 'react';
import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/GetCountryName.css";

export function GetCountryName({ phoneNumber,cssClass,countrySelection}) {
    return <HelloWorldSample phoneNumber = {phoneNumber} cssClass={cssClass} countrySelection={countrySelection}/>;
}
    