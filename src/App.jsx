import React, {useState} from "react";
import './App.css';
import './my_style.scss';
import { Form } from "./components/FormFunc/Form";
import { Masedger } from "./components/Messager/Masedger";
//import { Masedger } from "./components/MessagerClass/Masedger";

const App = () => {
    const [title, setTitle] = useState('Домашняя работа №1');
    const [coffe_name, setCoffeName] = useState('Бургер Усталого студента');
    return  <>
                <Form />
        <hr/>
                <Masedger name={ title } burger_name={ coffe_name }/>
            </>
}

export {
    App
};