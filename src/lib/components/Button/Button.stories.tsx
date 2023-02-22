import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from '.';
import Icon from '../Icon';

const meta: ComponentMeta<typeof Button> = {
  title: 'Lina Essentials/Button',
  component: Button,
  argTypes: {
    styleType: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    // disabled: false,
    children: 'Primary',
  },
};

export const PrimaryWithIcon: ComponentStoryObj<typeof Button> = {
  args: {
    // disabled: false,
    children: (
      <>
        <Icon icon='plus' size='22px' /> Primary
      </>
    ),
  },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    // disabled: false,
    styleType: 'secondary',
    children: 'Secondary',
  },
};

export const SecondaryWithIcon: ComponentStoryObj<typeof Button> = {
  args: {
    // disabled: false,
    styleType: 'secondary',
    children: (
      <>
        <Icon icon='plus' size='22px' /> Secondary
      </>
    ),
  },
};
