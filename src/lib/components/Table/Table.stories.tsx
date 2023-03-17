import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import Table from '.';

const meta: ComponentMeta<typeof Table> = {
  title: 'Lina Essentials/Tables/table',
  component: Table,
  decorators: [(Story) => <Story />],
};
export default meta;

export const TableStory: ComponentStoryObj<typeof Table> = {
  name: 'Table',
  args: {
    data: [
      {
        a: 'teste',
        b: 'aaaaaaaaaa',
      },
      {
        a: 'teste',
        b: 'teste true',
      },
      {
        a: 'teste',
        b: 'aaaaaaaaaaaaa',
      },
      {
        a: 'teste',
        b: 'aaaaaaaaaaaaa',
      },
      {
        a: 'teste',
        b: 'aaaaaaaaaaaaa',
      },
    ],
    headers: [
      { key: 'b', label: 'b' },
      { key: 'a', label: 'a' },
    ],
    actions: [
      {
        icon: 'trash',
        tooltip: 'teste message',
        showCondition: (rowData) => {
          const row = rowData as { a: string; b: string };
          if (row.b === 'aaaaaaaaaa') return false;
          return true;
        },
        action: (rowData) => {
          console.log(rowData);
        },
      },
    ],
  },
};
