import { useState } from 'react';
import styled from 'styled-components';
import { Input, Modal, PrimaryButton, Select, useLinaEssentialsTheme } from './lib';
import DatePicker from './lib/components/DatePicker';
import TreeSelect from './lib/components/TreeSelect';
import { TreeDataMock } from './lib/components/TreeSelect/mock';

function App() {
  const { toggleTheme } = useLinaEssentialsTheme();
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <span>
        <PrimaryButton onClick={() => toggleTheme('default')}>Tema Padrão</PrimaryButton>
        <br />
        <PrimaryButton onClick={() => toggleTheme('spi')}>Tema SPI</PrimaryButton>
        <br />
        <PrimaryButton onClick={() => toggleTheme('lina')}>Tema Lina</PrimaryButton>
      </span>
      <br />
      <PrimaryButton onClick={() => setOpen(true)}>Abrir Modal</PrimaryButton>
      <br />
      <div style={{ display: 'flex', gap: '4px' }}>
        <PrimaryButton onClick={() => setOpen(true)}>Abrir Modal</PrimaryButton>
        <TreeSelect
          label={{ text: 'a' }}
          keys={{ label: 'nome', childrens: 'children', value: 'id' }}
          options={TreeDataMock}
          showFullLabel={true}
          onChange={(v) => {
            console.log(v);
          }}
        />
        <Input label={{ text: 'a' }} />
        <Select
          label={{ text: 'a' }}
          options={[]}
          onChange={(v) => {
            console.log(v);
          }}
        />
      </div>
      <Modal title='Title' open={open} onClose={() => setOpen(false)} width='200px'>
        <DatePicker />
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

export default App;
