import React, { Component } from "react";

class InputText extends Component {

    // state = {
    //     val: ""
    // }

    // handelChange = (e) => {
    //     this.setState({ val: e.target.value } )
    // }

    render() {
        return  <>
                    {/*<p>{ this.state.val  }</p>*/}
                    <input type="text" value={ this.props.val } onChange={ this.props.change }/>
                </>

    }
}

export {
    InputText
}