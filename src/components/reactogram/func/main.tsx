import React, {FC, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Header} from "./Header";
import {Chats} from "./pages/Chats";
import {ChatList} from "./ChatList/ChatList";

// interface Msg {
//     id: string;
//     author: string;
//     time: string;
//     msg: string;
// };

export interface Chat {
    id: string;
    name: string;
}

const initialChat: Chat[] = [
    {
        id: '1',
        name: 'chat'
    }
]


export const Reactogram: FC = () => {
    const [chatlist, setChatlist] = useState<Chat[]>(initialChat);
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />}/>
                <Route path="chats">
                    <Route index element={<ChatList chatlist={ chatlist }  addChat={setChatlist}/>}/>
                    <Route path=":chaiId" element={<Chats chatlist={ chatlist }  addChat={setChatlist} />}/>
                </Route>
            </Route>
            <Route path="*" element={<h2>404</h2>}/>
        </Routes>
    </BrowserRouter>
    )
};
