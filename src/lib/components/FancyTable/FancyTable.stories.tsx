import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import FancyTable from '.';

const meta: ComponentMeta<typeof FancyTable> = {
  title: 'Lina Essentials/Tables/FancyTable',
  component: FancyTable,
  decorators: [(Story) => <Story />],
};
export default meta;

export const FancyTableStory: ComponentStoryObj<typeof FancyTable> = {
  name: 'Fancy',
  args: {},
};
