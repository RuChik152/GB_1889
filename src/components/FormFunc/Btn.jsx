import React, { Component } from "react";

const Btn = (props) => {
    return <button onClick = { props.click } >{ props.name }</button>
}

export {
    Btn
}