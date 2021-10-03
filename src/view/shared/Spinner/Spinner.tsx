import React from "react";
import { SpinnerComponent } from "./SpinnerComponent";
export default function Spinner() {
  return (
    <SpinnerComponent>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerComponent>
  );
}
