import React, { Component } from "react";
import { Msg } from "./msg";

export class Chat extends Component {

    componentDidMount() {
        setTimeout( this.props.bot, 1500 );
    }

    shouldComponentUpdate( nextProps, nextState ) {
        if ( nextProps.activate != this.props.activate ) {
            setTimeout( this.props.bot, 1500 );
            return true
        }
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