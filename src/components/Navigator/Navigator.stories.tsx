import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigator } from '@/components';
import tw from 'twin.macro';
import { ROUTES } from '@/routes';

export default {
  title: 'Example/Navigator',
  component: Navigator,
} as ComponentMeta<typeof Navigator>;
const Wrapper = tw.section`flex w-1/6`;
const Template: ComponentStory<typeof Navigator> = (args) => (
  <Wrapper>
    <Navigator {...args} />
  </Wrapper>
);

export const Example = Template.bind({});
Example.args = {
  routes: ROUTES,
};
