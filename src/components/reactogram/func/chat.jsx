import React, { useState } from "react";
import { Msg } from "./msg";


export const Chat = (props) => {

    const reversArr = () => {
        let arr = [...props.message];
        return arr.reverse();
    }

    return  <div className="chat">
                <div className="chat__area">
                    {
                        reversArr().map( (item, index) => <Msg item={ item } key={ index }/>)
                    }
                </div>
            </div>

}