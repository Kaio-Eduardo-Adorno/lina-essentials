import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export const InputErrorMessage = styled('div')`
  position: absolute;
  bottom: ${(props) => `calc(-${props.theme.fontSizes.small} - 4px)`};
  left: 4px;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.primary};
`;
InputErrorMessage.defaultProps = { theme: defaultTheme };
