import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { SecondaryButton } from '.';
import Icon from '../Icon';

const meta: ComponentMeta<typeof SecondaryButton> = {
  title: 'Lina Essentials/Button',
  component: SecondaryButton,
  argTypes: {},
  decorators: [(Story) => <Story />],
};
export default meta;

export const Secondary: ComponentStoryObj<typeof SecondaryButton> = {
  args: {
    children: 'Secondary',
  },
};

export const SecondaryWithIcon: ComponentStoryObj<typeof SecondaryButton> = {
  args: {
    children: (
      <>
        <Icon icon='plus' size='22px' /> Secondary
      </>
    ),
  },
};
