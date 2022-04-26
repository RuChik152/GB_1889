import React from 'react';
import { Msg } from './msg';

export default {
  title: 'Reactorgam/Msg',
  component: Msg,
};

const Template = (args) => <Msg {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  item: {
    author: 'admin',
    msg: 'Тестовое сообщение №1!',
    time: '10:10:10',
  },
};
