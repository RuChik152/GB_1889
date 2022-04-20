import React, {FC} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Header} from "./Header";
import {Chats} from "./pages/Chats";

// interface Msg {
//     id: string;
//     author: string;
//     time: string;
//     msg: string;
// };

export const Reactogram: FC = () => {

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />}/>
                <Route path="chats">
                    <Route index element={<Chats/>}/>
                </Route>
            </Route>
            <Route path="*" element={<h2>404</h2>}/>
        </Routes>
    </BrowserRouter>
    )
};
