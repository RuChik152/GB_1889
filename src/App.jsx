import React, { useState } from "react";
import './scss/style.scss';
import { Test } from "./components/test";
//import { Form } from "./components/FormFunc/Form";
//import { Masedger } from "./components/Messager/Masedger";
//import { Masedger } from "./components/MessagerClass/Masedger";
//import { Reactogram } from "./components/reactogram/func/main";
import { Reactogram } from "./components/reactogram/class/main";

const App = () => {
    //Нужно будет удалить, необходимо для работы компонента Masedger
    // const [ title, setTitle ] = useState( 'Домашняя работа №1' );
    // const [ coffe_name, setCoffeName ] = useState( 'Бургер Усталого студента' );

    return <Reactogram/>

    //return <Test/>

}

export {
    App
};