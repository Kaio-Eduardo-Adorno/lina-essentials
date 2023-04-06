import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Select from '.';

const meta: ComponentMeta<typeof Select> = {
  title: 'Lina Essentials/Select',
  component: Select,
  decorators: [
    (Story) => {
      const [value, setValue] = useState('');

      useEffect(() => {
        console.log(value);
      }, [value]);

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
              options: [
                { label: 'ok', value: 'ok' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8', value: '8' },
                { label: '9', value: '9' },
                { label: '10', value: '10' },
                { label: 'teste', value: 'teste' },
              ],
              multi: true,
              searchable: true,
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
