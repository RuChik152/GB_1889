import React, { Component } from "react";
import { Msg } from "./msg";

export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }

    shouldComponentUpdate( nextProps, nextState) {
        console.log(nextProps.msg);
        return true
    }

    reversArr = () => {
        let arr = [ ...this.props.message ];
        return arr.reverse();
    }

    render() {
        return <div className = "chat">
            <div className = "chat__area">
                {
                    this.reversArr().map( ( item, index ) => <Msg item = { item } key = { index } /> )
                }
            </div>
        </div>
    }

}