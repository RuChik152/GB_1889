import React from 'react';
import { Reactogram } from './main';

export default {
  title: 'Reactorgam/Reactogram',
  component: Reactogram,
};

const Template = (args) => <Reactogram {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: 'TEST_NAME',
};
