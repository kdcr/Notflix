/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import VoteAverage from './voteAverage';

export default {
  title: 'Atomic/VoteAverage',
  component: VoteAverage,
  argTypes: {
    value: { control: 'number' },
    stars: { control: 'number' },
  },
} as ComponentMeta<typeof VoteAverage>;

const Template: ComponentStory<typeof VoteAverage> = (args) => <VoteAverage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 0,
  stars: 5,
};
