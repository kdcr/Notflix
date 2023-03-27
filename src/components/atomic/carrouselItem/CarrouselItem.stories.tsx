/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CarrouselItem from './CarrouselItem';

export default {
  title: 'Atomic/CarrouselItem',
  component: CarrouselItem,
  argTypes: {
    item: { control: 'object' },
  },
} as ComponentMeta<typeof CarrouselItem>;

const Template: ComponentStory<typeof CarrouselItem> = (args) => <CarrouselItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  item: {
    id: 1392781,
    voteAverage: 5,
    title: 'Shazam! Fury of the Gods',
    imageUrl: 'https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
  },
};
