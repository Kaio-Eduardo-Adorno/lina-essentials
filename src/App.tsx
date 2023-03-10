import styled from 'styled-components';
import { Button } from './lib';
import Select from './lib/components/Select';
import CustomThemeProvider, { useTheme } from './lib/provider/ThemeProvider';
import { themes } from './lib/themes';

function App() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <Wrapper>
        <Button styleType={'primary'} onClick={() => toggleTheme('spi')}>
          Primary
        </Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f0f0f1;
`;

export default App;
