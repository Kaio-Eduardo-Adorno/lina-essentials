import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PrimaryButton } from '.';
import Icon from '../Icon';

const meta: ComponentMeta<typeof PrimaryButton> = {
  title: 'Lina Essentials/Button',
  component: PrimaryButton,
  argTypes: {},
  decorators: [(Story) => <Story />],
};
export default meta;

export const Primary: ComponentStoryObj<typeof PrimaryButton> = {
  args: {
    children: 'Primary',
  },
};

export const PrimaryWithIcon: ComponentStoryObj<typeof PrimaryButton> = {
  args: {
    children: (
      <>
        <Icon icon='plus' size='22px' /> Primary
      </>
    ),
  },
};
