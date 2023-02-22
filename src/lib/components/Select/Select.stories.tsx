import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Select from '.';

const meta: ComponentMeta<typeof Select> = {
  title: 'Lina Essentials/Select',
  component: Select,
  decorators: [(Story) => <Story />],
};
export default meta;

export const SelectComponent: ComponentStoryObj<typeof Select> = {
  name: 'Default',
  args: {
    disabled: false,
    children: 'Hello',
  },
};
