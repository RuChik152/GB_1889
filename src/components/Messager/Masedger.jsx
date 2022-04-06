import React, {useState} from "react";
import {Bread} from "./Bread";
import {Sauce} from "./ Sauce";

const Masedger = ( props ) => {


    const [count, setCount] = useState(0);
    const [bread, setBread] = useState('');


    const plus = () => {
        console.log('sum');
        setCount(count + 1);
    }

    const minus = () => {
        console.log('minus');
        if(count < 1) {
            alert('Ниже нельзя');
        } else {
            setCount(count - 1);
        }
    }



    return  <div className="main">

                <h1 className="main__title">{ props.name }</h1>
                <p> Какого цвета заяц: { bread ? bread : 'Нужно выбрать' } </p>
                <h2>{ count }</h2>
                <Bread plus={ plus } minus={ minus }/>
                {/*<Sauce/>*/}
            </div>

};

export {
    Masedger
};