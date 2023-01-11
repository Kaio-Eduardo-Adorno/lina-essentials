import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '.';
import Button from '../Button';

const meta: ComponentMeta<typeof Modal> = {
  title: 'Lina Essentials/Modal',
  component: Modal,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button styleType='primary' onClick={() => setOpen(true)}>
            Abrir Modal
          </Button>
          <Story
            args={{
              title: 'Título exemplo',
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
  name: 'Content',
  args: {
    children: 'Hello',
  },
};
