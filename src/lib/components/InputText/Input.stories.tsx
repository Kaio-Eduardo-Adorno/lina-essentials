import { flatten, unflatten } from 'flat';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyComponent from '.';
import IconStories from '../Icon/Icon.stories';

const delimiter = '__';

const getControlInfo = (name: string) => {
  const [_root, group, keyName] = name.split(delimiter);

  return {
    table: {
      category: group,
      // subcategory: subcategory,
    },
    group,
    // subcategory,
    keyName,
  };
};

const getBaseControlInfo = (name: string) => {
  const controlInfo = getControlInfo(name);
  return {
    name: controlInfo.keyName,
    table: controlInfo.table,
  };
};

const meta: ComponentMeta<typeof MyComponent> = {
  title: 'Lina Essentials/Input',
  component: MyComponent,
  decorators: [(Story) => <Story />],
};
export default meta;

const Template: ComponentStory<any> = (flattenedArgs) => {
  const args: any = unflatten(flattenedArgs, { delimiter });

  return <MyComponent {...args} />;
};

export const Text = Template.bind({});
Text.args = flatten(
  {
    label: {
      text: 'fffff',
    },
    leftIcon: { icon: 'eye', fill: '#8667EC', size: 22 },
    rightIcon: { icon: 'eye', fill: '#8667EC', size: 22 },
    type: 'number',
  },
  { delimiter },
);

Text.argTypes = {
  placeholder: {
    type: 'string',
  },
  label__text: {
    ...getBaseControlInfo('root__label__text'),
  },
  leftIcon__icon: {
    ...getBaseControlInfo('root__leftIcon__icon'),
    ...IconStories.argTypes?.icon,
  },
  leftIcon__size: {
    ...getBaseControlInfo('root__leftIcon__size'),
    type: 'number',
  },
  leftIcon__fill: {
    ...getBaseControlInfo('root__leftIcon__fill'),
    control: { type: 'color' },
  },
  rightIcon__icon: {
    ...getBaseControlInfo('root__rightIcon__icon'),
    ...IconStories.argTypes?.icon,
  },
  rightIcon__size: {
    ...getBaseControlInfo('root__rightIcon__size'),
    type: 'number',
  },
  rightIcon__fill: {
    ...getBaseControlInfo('root__rightIcon__fill'),
    control: { type: 'color' },
  },
};
