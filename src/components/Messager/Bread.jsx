import React from "react";

const Bread = (props) => {



    return  <>
            <div className="bread">
                <input type="radio" name="radio" id="bread_1" value="Белый"/>
                <label htmlFor="bread_1">Bread_1</label>
                <br/>
                <input type="radio" name="radio" id="bread_2" value="Серый"/>
                <label htmlFor="bread_2">Bread_2</label>
            </div>
            <button onClick={ props.plus }>ПЛЮС</button>
            <button onClick={ props.minus }>МИНУС</button>
            </>
};

export {
    Bread
}