import React, { Component } from "react";

const InputText = (props) => {
    return <input type="text" value = { props.val } onChange={ props.change }/>
}

export {
    InputText
}