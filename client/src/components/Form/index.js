import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (

    <div class="input-field col s6">
        <input {...props } placeholder="Choose commitment:" />
    </div>

 );
}


export function FormBtn(props) {
  return (
    // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //   {props.children}
    // </button>

    // <a {...props} class="waves-effect waves-light btn" ><i class="material-icons left">cloud</i>{props.children}</a>
    <a {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children} </a>
  );
}


