import React from 'react';
import { Story, Meta } from '@storybook/react';
import Title, { TitleProps } from '.';

export default {
    title: 'Components/Typography/Title',
    Component: Title
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args}>{args.children}</Title>;

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
    children: 'Hello World!'
}