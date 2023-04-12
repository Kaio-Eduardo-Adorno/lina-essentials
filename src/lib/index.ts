import { iconsList } from './components/Icon';
import { InputProps } from './components/InputText';
import { SelectProps } from './components/Select';
import { TextAreaProps } from './components/TextArea';

//Types
export type IconType = typeof iconsList[number];
export type { InputProps, SelectProps, TextAreaProps };

//Providers
export {
  useTheme as useLinaEssentialsTheme,
  default as LinaEssentialsThemeProvider,
} from './provider/ThemeProvider';

//Components
export { PrimaryButton, SecondaryButton } from './components/Button';
export { default as Icon } from './components/Icon';
export { default as Input } from './components/InputText';
export { default as Modal } from './components/Modal';
export { default as Select } from './components/Select';
export { default as TextArea } from './components/TextArea';
export { default as Tooltip } from './components/Tooltip';
export { default as Table } from './components/Table';
