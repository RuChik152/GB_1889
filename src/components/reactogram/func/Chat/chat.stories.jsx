import React from 'react';
import { Chat } from './chat';

export default {
  title: 'Reactorgam/Chat',
  component: Chat,
};

const Template = (args) => <Chat {...args} />;

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
