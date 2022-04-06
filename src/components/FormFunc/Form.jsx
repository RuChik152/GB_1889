import React, { useState } from "react";
import {InputText} from "./InputText";
import { Btn } from "./Btn";

const Form = () => {

    const [name, setName] = useState('click')
    const [val, setVal] = useState('')
    const [msg, setMsg] = useState([])
    const [vis, setVis] = useState(true)

   const handelClick = () => {
       setMsg([...msg, val])
       setVal('')
    }

   const handelChange = (e) => {
       setVal( e.target.value )
    }


        return  <>
            {
                vis
                &&
                <ul>
                    { msg.map( (item) => <li> { item } </li> ) }
                </ul>
            }
            <InputText change = { handelChange } val = { val }/>
            <Btn name = { name } click = { handelClick }/>

            <button onClick = { () => setVis( !vis )}>
                { vis ? 'hide' : 'show' }
            </button>
        </>
}

export {
    Form
}