import React, {useState} from "react";
import './App.css';
import './my_style.scss';
import { Form } from "./components/FormFunc/Form";
import {Masedger} from "./components/Messager/Masedger";


const App = () => {
    const [title, setTitle] = useState('Домашняя работа №1');
    return  <>
                <Form />
        <hr/>
                <Masedger name={ title } />
            </>
}

export {
    App
};