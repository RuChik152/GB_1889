import React, {useState} from "react";
import {Bread} from "./Bread";
import {Sauce} from "./ Sauce";

const Masedger = ( props ) => {


    const [count, setCount] = useState(0);
    const [cutlet, setCutlet] = useState(0);
    const [bread, setBread] = useState(0);
    const [sumSauce, setSumSauce] = useState([]);

    const plus = () => {
        setCount(count + 1);
        setCutlet(cutlet + 15);
    }

    const minus = () => {
        if(count < 1) {
            alert('Ниже нельзя');
        } else {
            setCount(count - 1);
            setCutlet(cutlet - 15);
        }
    }


    const radioChange = (e) => {
        setBread(e.target.value);
    }

    const checkboxChange = (e) => {
        let obj2 = Object.assign({}, {id: e.dataset.id, price: e.dataset.price})
        let check = sumSauce.findIndex( (item) => item.id == obj2.id)
        if(check == -1){
            setSumSauce([...sumSauce, obj2]);
        } else {
            let arr = sumSauce;
            setSumSauce([]);
            let newArr = arr.filter( (item) => item.id != obj2.id );
            setSumSauce([...newArr]);
        }
    }

    const total = () => {
        let totalCutlet = cutlet;
        let totalBread = bread;
        let totalPrice = +sumSauce.reduce( (accumulator, currentValue) => Number(accumulator) + Number(currentValue.price),  0)

        return Number(totalCutlet) + Number(totalBread) + Number(totalPrice);
    }


    return  <div className="main">
                <h1 className="main__title">{ props.name }</h1>
                <h2 className="main__title">{ props.burger_name }</h2>
                <p> Размер булки: { bread ? bread : 'Нужно выбрать' } </p>
                <h2> Количество Котлет { count }</h2>
                <Bread plus={ plus } minus={ minus } radio={ radioChange }/>
                <Sauce checkbox={ checkboxChange } />
                <p>Cумма:{ total() }</p>
            </div>

};

export {
    Masedger
};