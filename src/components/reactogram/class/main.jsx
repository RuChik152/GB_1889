import React, { Component } from "react";
import { Chat } from "./chat";
import { Input } from "./input";


export class Reactogram extends Component {

    state = {
        text: '',
        author: '',
        activate: false,
        time: '',
        msg: []
    }

    componentDidMount() {
        console.log( `Состояние активатора бота на момент монтирования ${ this.state.activate }` );
        setTimeout( this.bot, 1500 );
    }

    // shouldComponentUpdate( nextProps, nextState ) {
    //     console.log('22',nextState.activate)
    //     console.log('33',this.state.activate)
    //     // if ( nextState.activate != this.state.activate ){
    //     //      setTimeout( this.bot, 1500 );
    //     //     return true
    //     // } else {
    //     //     return false
    //     // }
    //     if(nextState.activate !== this.state.activate && nextState.msg != this.state.msg){
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    handelChange = ( e ) => {
        let tag = e.target;
        if ( tag.className === 'text__input' ) {
            this.setState( { text: tag.value } );
        } else if ( tag.className === 'text__name' ) {
            this.setState( { author: tag.value } );
        }
        this.setState( { time: this.createCurrentTime() } );
    }

    actionClick = () => {
        let obj = { msg: this.state.text, author: this.state.author, time: this.state.time };
        this.setState( { msg: [ ...this.state.msg, obj ] } );
        this.setState( { activate: true } );
    }

    createCurrentTime = () => {
        let time = new Date();
        return `${ time.getHours() } : ${ time.getMinutes() } : ${ time.getSeconds() }`;
    }

    updateState = ( obj ) => {
        this.setState( { msg: [ ...this.state.msg, obj ] } );
        this.setState( { time: '' } );
        this.setState( { text: '' } );
        this.setState( { author: '' } );
    }

    bot = () => {
        let lengthMsg = this.state.msg.length;
        if ( lengthMsg === 0 ) {
            let obj = {
                msg: 'Привет, это бот психологической помощи Вася Вася. Вы можете использовать команды для взаимодействия с ним =>  #Слово #Время #Поиск',
                author: 'BothFather',
                time: `${ this.createCurrentTime() }`
            };
            this.updateState( obj );
            // this.setState( { msg: [ ...this.state.msg, obj ] } );
            // this.setState( { time: '' } );
            // this.setState( { text: '' } );
            // this.setState( { author: '' } );
        } else if( this.state.text === '#Слово' ) {
            let obj = {
                msg: <>
                    <li><a href = "https://slovardalja.net/" target = "_blank">Словарь Даля</a></li>
                    <li><a href = "https://stih.su/pushkin/" target = "_blank">Стихи Пушкина</a></li>
                </>,
                author: 'BothFather',
                time: `${ this.createCurrentTime() }`
            };
            this.updateState( obj );
            // this.setState( { msg: [ ...this.state.msg, obj ] } );
            // this.setState( { time: '' } );
            // this.setState( { text: '' } );
            // this.setState( { author: '' } );
        } else if ( this.state.text === '#Время' ) {
            let obj = {
                msg: <>
                    <li><a href = "https://time.is/ru/" target = "_blank">Time</a></li>
                    <li><a href = "https://time100.ru/" target = "_blank">Time 100</a></li>
                </>,
                author: 'BothFather',
                time: `${ this.createCurrentTime() }`
            };
            this.updateState( obj );
            // this.setState( { msg: [ ...this.state.msg, obj ] } );
            // this.setState( { time: '' } );
            // this.setState( { text: '' } );
            // this.setState( { author: '' } );
        } else if ( this.state.text === '#Поиск' ) {
            let obj = {
                msg: <>
                    <li><a href = "https://ya.ru/" target = "_blank">Time</a></li>
                    <li><a href = "https://duckduckgo.com/" target = "_blank">DuckDuckGo</a></li>
                    <li><a href = "https://www.dogpile.com/" target = "_blank">DogPile</a></li>
                </>,
                author: 'BothFather',
                time: `${ this.createCurrentTime() }`
            };
            this.updateState( obj );
            // this.setState( { msg: [ ...this.state.msg, obj ] } );
            // this.setState( { time: '' } );
            // this.setState( { text: '' } );
            // this.setState( { author: '' } );
        } else {
            let name = this.state.msg.slice( -1 );
            const msgBot = [ 'Сообщение от пользователя', 'Message from user(англ.)', 'Message de l\'utilisateur(франц.)', 'Nachricht vom Benutzer(немц.)', '\n' +
            '用戶留言(кит.)' ];
            let template = `$wel__template$ $nik__name$.`;
            let positionMsgBot = parseInt( Math.random() * msgBot.length );
            let regWel = /\$wel__template\$/gi;
            let newStr = template.replace( regWel, msgBot[ positionMsgBot ] );
            regWel = /\$nik__name\$/gi;
            newStr = newStr.replace( regWel, name[ 0 ].author );
            let obj = { msg: `${ newStr }`, author: 'BothFather', time: `${ this.createCurrentTime() }` };
            this.updateState( obj );
            // this.setState( { msg: [ ...this.state.msg, obj ] } );
            // this.setState( { time: '' } );
            // this.setState( { text: '' } );
            // this.setState( { author: '' } );
        }
    }

    render() {
        return <>
            <Chat message = { this.state.msg } />
            <Input click = { this.actionClick } text = { this.state.text } author = { this.state.author } change = { this.handelChange } />
        </>
    }

}