import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Icon, { iconsList } from '.';

const meta: ComponentMeta<typeof Icon> = {
  title: 'Lina Essentials/Icon',
  component: Icon,
  argTypes: {
    size: { type: 'string' },
    icon: {
      options: iconsList,
      control: { type: 'select' },
    },
    fill: { control: { type: 'color' } },
  },
  args: { size: '24px' },
};
export default meta;

export const IconStory: ComponentStoryObj<typeof Icon> = {
  name: 'Icon',
  args: { icon: 'eye' },
};
