import { useState } from 'react';
import styled from 'styled-components';
import { Modal, PrimaryButton } from './lib';

import { useTheme } from './lib/provider/ThemeProvider';
import { themes } from './lib/themes';

function App() {
  const { toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <PrimaryButton onClick={() => setOpen(true)}>Abrir Modal</PrimaryButton>
      <Modal title='Title' open={open} onClose={() => setOpen(false)} width='200px'>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

export default App;
