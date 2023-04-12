import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '.';
import { PrimaryButton } from '../Button';

const meta: ComponentMeta<typeof Modal> = {
  title: 'Lina Essentials/Modal',
  component: Modal,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <PrimaryButton onClick={() => setOpen(true)}>Abrir Modal</PrimaryButton>
          <Story
            args={{
              title: 'Title',
              open: open,
              onClose: () => setOpen(false),
              children: 'exemplo',
            }}
          />
        </>
      );
    },
  ],
};
export default meta;

export const ModalStory: ComponentStoryObj<typeof Modal> = {
  name: 'Modal',
  args: {
    children: 'Hello',
  },
};
