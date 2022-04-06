import React, { Component } from "react";

class Btn extends Component {
    render() {
        console.log(this.props)
        return <button onClick={ this.props.click } >{ this.props.name }</button>
    }
}

export {
    Btn
}