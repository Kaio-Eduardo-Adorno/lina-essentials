import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Select from '.';

const meta: ComponentMeta<typeof Select> = {
  title: 'Lina Essentials/Select',
  component: Select,
  decorators: [
    (Story) => {
      const [value, setValue] = useState('ok');

      return (
        <>
          <Story
            args={{
              onChange: (v: any) => {
                setValue(v);
              },
              selectedValue: value,
              label: {
                text: 'fffff',
                tooltip: 'teste tooltip',
              },
            }}
          />
        </>
      );
    },
  ],
};
export default meta;

export const SelectComponent: ComponentStoryObj<typeof Select> = {
  name: 'Default',
  args: {
    disabled: false,
    children: 'Hello',
  },
};
