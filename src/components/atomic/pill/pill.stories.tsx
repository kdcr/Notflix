/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pill from './Pill';

export default {
  title: 'Atomic/Pill',
  component: Pill,
  argTypes: {
    children: { control: 'object' },
  },
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <span>Test text</span>,
};
