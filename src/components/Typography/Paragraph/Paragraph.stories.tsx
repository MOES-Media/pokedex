import React from 'react';
import { Story, Meta } from '@storybook/react';

import Paragraph, { ParagraphProps } from './index';

export default {
    title: 'Components/Typography/Paragraph',
    component: Paragraph
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args}>{args.children}</Paragraph>

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
    children: ` It was a dog. It was a big dog. Does it come in black? I'm not wearing hockey pads. I'm Batman Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended.`
};
