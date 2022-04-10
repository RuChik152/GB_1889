import React, { Component } from "react";

export class Test extends Component {

    componentDidMount() {
        console.log('component Did Mount - Происходит монтированием в DOM')
    }

    componentDidUpdate() {
        console.log('component Did Update - Обновление STATE')
    }

    componentWillUnmount() {

    }

    render() {
        return <h1>TEST</h1>
    }

}