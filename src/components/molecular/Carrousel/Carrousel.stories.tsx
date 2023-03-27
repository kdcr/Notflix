/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carrousel from './Carrousel';

export default {
  title: 'Atomic/Carrousel',
  component: Carrousel,
  argTypes: {
    items: { control: 'object' },
  },
} as ComponentMeta<typeof Carrousel>;

const Template: ComponentStory<typeof Carrousel> = (args) => <Carrousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      id: 1,
      title: 'test 1',
      imageUrl: 'https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      voteAverage: 7,
    },
    {
      id: 1,
      title: 'test 1',
      imageUrl: 'https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      voteAverage: 7,
    },
    {
      id: 1,
      title: 'test 1',
      imageUrl: 'https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      voteAverage: 7,
    },
  ],
};
