import React from "react";

const Sauce = (props) => {

    return  <>
                <input type="radio" name="sauce" id="11"/>
                <label htmlFor="11" name="sauce">1</label>
                <input type="radio" name="sauce" id="22"/>
                <label htmlFor="22" name="sauce">2</label>
                <input type="radio" name="sauce" id="33"/>
                <label htmlFor="33" name="sauce">3</label>
            </>
}

export {
    Sauce
}