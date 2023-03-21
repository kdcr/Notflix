/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShowPoster from './showPoster';

export default {
  title: 'Atomic/ShowPoster',
  component: ShowPoster,
  argTypes: {
    title: { control: 'text' },
    imageUrl: { control: 'text' },
    className: { control: 'text' },
  },
} as ComponentMeta<typeof ShowPoster>;

const Template: ComponentStory<typeof ShowPoster> = (args) => <ShowPoster {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Shazam! Fury of the Gods',
  imageUrl: 'https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
};
