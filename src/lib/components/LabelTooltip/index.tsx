import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export const ToolTipWrapper = styled('div')`
  position: relative;
`;

export const ToolTipButton = styled('div')`
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 8px;
  cursor: pointer;
`;
ToolTipButton.defaultProps = { theme: defaultTheme };
