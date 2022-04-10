import React, { Component } from "react";
import { Msg } from "./msg";

export class Chat extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     setTimeout( this.props.bot, 1500 );
    // }

    // shouldComponentUpdate( nextProps, nextState) {
    //     console.log('chek',nextProps)
    //
    //     if(nextProps.activate != this.props.activate){
    //         if(nextProps.msg != this.props.message){
    //             setTimeout( this.props.bot, 1500 );
    //             return true
    //         }
    //         return false
    //     }else {
    //         return false
    //     }
    //
    // }



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