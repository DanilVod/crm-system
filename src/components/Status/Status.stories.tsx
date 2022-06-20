import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactsIcon from '@/assets/contacts.svg?component';
import { Status } from '@/components';
import tw from 'twin.macro';

export default {
  title: 'Example/Status',
  component: Status,
} as ComponentMeta<typeof Status>;
const Wrapper = tw.section`flex w-1/6`;
const Template: ComponentStory<typeof Status> = (args) => (
  <Wrapper>
    <Status {...args} />
  </Wrapper>
);

export const Example = Template.bind({});
Example.args = {
  type: 'Top rated',
};
