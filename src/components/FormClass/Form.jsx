import React, {  Component } from "react";
import {InputText} from "./InputText";
import {Btn} from "./Button";

export class Form extends Component {
    state = {
        name: "click",
        val: "",
        msg: [],
        vis: true
    }

    handelClick = () => {
        console.log( 'click' )
        this.setState({ msg: [...this.state.msg, this.state.val] })
        this.setState({ val: ''} )
    }

    handelChange = (e) => {
        console.log( 'change' )
        this.setState({val: e.target.value})
    }

    render() {
        return  <>
                    {
                        this.state.vis
                        &&
                        <ul>
                            { this.state.msg.map((item) => <li> { item } </li> ) }
                        </ul>
                    }
                    <InputText change={ this.handelChange } val={ this.state.val }/>
                    <Btn name={ this.state.name } click={ this.handelClick }/>

                    <button onClick={ () => this.setState({vis: !this.state.vis})}>
                        { this.state.vis ? 'hide' : 'show' }
                    </button>
                </>
    }
}