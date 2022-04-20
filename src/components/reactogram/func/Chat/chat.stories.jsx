import React from 'react';
import { ChatArea } from './chatArea';

export default {
  title: 'Reactorgam/ChatArea',
  component: ChatArea,
};

const Template = (args) => <ChatArea {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  message: [
    {
      author: 'admin',
      msg: 'Тестовое сообщение №1!',
      time: '10:10:10',
    },
    {
      author: 'admin2',
      msg: 'Тестовое сообщение №2!',
      time: '10:10:10',
    },
  ],
};
