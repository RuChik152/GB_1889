import React from "react";

const Sauce = (props) => {

    const action = (e) => {
        props.checkbox(e.target);
        e.target.classList.toggle('label__active')
    }

    return  <div className="sauce">
                <input className="sauce__input" type="checkbox" name="sauce" id="checkbox_1" onChange={ props.checkbox } value="20"/>
                <label className="sauce__label" htmlFor="checkbox_1" name="sauce" data-id="checkbox_1" data-price="20" onClick={ action }  >Кетчуп</label>
                <input className="sauce__input" type="checkbox" name="sauce" id="checkbox_2" onChange={ props.checkbox } value="40"/>
                <label className="sauce__label" htmlFor="checkbox_2" name="sauce" data-id="checkbox_2" data-price="40" onClick={ action }>Маионез</label>
                <input className="sauce__input" type="checkbox" name="sauce" id="checkbox_3" onChange={ props.checkbox } value="60"/>
                <label className="sauce__label" htmlFor="checkbox_3" name="sauce" data-id="checkbox_3" data-price="60" onClick={ action }>Брусничный</label>
            </div>
}

export {
    Sauce
}