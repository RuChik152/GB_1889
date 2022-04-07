import React, { Component } from "react";
import { Bread } from "./Bread";
import { Sauce } from "./ Sauce";

class Masedger extends Component {

    state = {
        count: 0,
        cutlet: 0,
        bread: 0,
        sumSauce: []
    }


    plus = () => {
        this.setState({count: this.state.count + 1});
        this.setState({cutlet: this.state.cutlet + 15});
    }

    minus = () => {
        if(this.state.count < 1) {
            alert('Ниже нельзя');
        } else {
            this.setState({count: this.state.count - 1});
            this.setState({cutlet: this.state.cutlet - 15});
        }
    }


    radioChange = (e) => {
        this.setState({bread: e.target.value});
    }

    checkboxChange = (e) => {
        let obj2 = Object.assign({}, {id: e.dataset.id, price: e.dataset.price})
        let check = this.state.sumSauce.findIndex( (item) => item.id == obj2.id)

        if(check == -1){
            this.setState({sumSauce: [...this.state.sumSauce, obj2]});
        } else {
            let arr = this.state.sumSauce;
            this.setState({ sumSauce: [] });
            let newArr = arr.filter( (item) => item.id != obj2.id );
            this.setState({ sumSauce: [...newArr] });
        }

        // let chk = e.target.checked;
        //
        // if( chk == true ){
        //     let obj = Object.assign({}, {id: e.target.id, price: e.target.value})
        //     this.setState({sumSauce: [...this.state.sumSauce, obj]});
        //
        // } else {
        //     let id = e.target.id;
        //     /* Почему то, если пататься удалить через splice, удаляеться не то, что нужно */
        //     // let idx = sumSauce.findIndex( (item) => item.id == id);
        //     // setSumSauce(sumSauce.splice(idx, 1));
        //
        //     /* А если так, то работает */
        //     let arr = this.state.sumSauce;
        //     this.setState({ sumSauce: []});
        //     let newArr = arr.filter( (item) => item.id != id );
        //     this.setState({ sumSauce: [...newArr] });
        // }

    }

    total = () => {
        let totalCutlet = this.state.cutlet;
        let totalBread = this.state.bread;
        let totalPrice = +this.state.sumSauce.reduce( (accumulator, currentValue) => Number(accumulator) + Number(currentValue.price),  0)

        return Number(totalCutlet) + Number(totalBread) + Number(totalPrice);
    }


    render() {
        return  <div className="main">
            <h1 className="main__title">{ this.props.name }</h1>
            <h2 className="main__title">{ this.props.burger_name }</h2>
            <h2> Количество Котлет { this.state.count }</h2>
            <p> Размер булки: { this.state.bread ? this.state.bread : 'Нужно выбрать' } </p>
            <Bread plus={ this.plus } minus={ this.minus } radio={ this.radioChange }/>
            <Sauce checkbox={ this.checkboxChange } />
            <p>Итоговая стоимотсть: { this.total() } &#8381;</p>
        </div>
    }




}

export {
    Masedger
};