import React from 'react';
import { NavChatItem } from './navChatItem';

export default {
  title: 'Reactorgam/NavChatItem',
  component: NavChatItem,
};

const Template = (args) => <NavChatItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  link: '#',
  title: 'Название канала',
};
