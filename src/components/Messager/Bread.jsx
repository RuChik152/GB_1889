import React, {useState} from "react";

const Bread = (props) => {


    return  <>
                <div className="bread">
                    <input className="bread__input" type="radio" name="radio" id="bread_1" value="40" onChange={ props.radio } />
                    <label className="bread__label" htmlFor="bread_1">Большая Булка</label>
                    <br/>
                    <input className="bread__input" type="radio" name="radio" id="bread_2" value="20" onChange={ props.radio }/>
                    <label className="bread__label" htmlFor="bread_2">Маленькая Булка</label>
                </div>
                <div className="bread__box">
                    <button className="bread__btn" onClick={ props.minus }>МИНУС</button>
                    <button className="bread__btn" onClick={ props.plus }>ПЛЮС</button>
                </div>
            </>
};

export {
    Bread
}