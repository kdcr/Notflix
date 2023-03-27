/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextSwitch from './textSwitch';

export default {
  title: 'Atomic/TextSwitch',
  component: TextSwitch,
  argTypes: {
    leftValue: { control: 'text' },
    rightValue: { control: 'text' },
    active: { control: 'boolean' },
    onChange: { control: 'function' },
  },
} as ComponentMeta<typeof TextSwitch>;

const Template: ComponentStory<typeof TextSwitch> = (args) => <TextSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftValue: 'Movies',
  rightValue: 'TV Shows',
  active: false,
  onChange: () => null,
};
