import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from '.';
import Icon from '../Icon';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../provider/ThemeProvider';

const meta: ComponentMeta<typeof Button> = {
  title: 'Lina Essentials/Button',
  component: Button,
  argTypes: {
    styleType: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
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
