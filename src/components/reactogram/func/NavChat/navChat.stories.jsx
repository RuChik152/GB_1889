import React from "react";
import { NavChat } from "./navChat";

export default {
    title: 'Reactorgam/NavChat',
    component: NavChat,
}

const Template = (args) => <NavChat {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    list: [
        {
            link: '#',
            title: 'Название Канала 1'
        },
        {
            link: '#',
            title: 'Название Канала 2'
        },
        {
            link: '#',
            title: 'Название Канала 3'
        }
    ],
};