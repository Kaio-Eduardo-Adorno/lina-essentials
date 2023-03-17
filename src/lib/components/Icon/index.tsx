import * as Icons from '../../icons';
// console.log(Object.keys(Icons));
export const iconsList = [
  'align_left',
  'apps',
  'arrow_right',
  'bell',
  'bill',
  'calculate',
  'calendar',
  'chart',
  'check',
  'check_circle',
  'chevron_down',
  'chevron_left',
  'chevron_right',
  'cog',
  'comment',
  'disable',
  'document1',
  'document2',
  'document_ok',
  'edit_file',
  'eye',
  'filter',
  'folder',
  'heart',
  'home',
  'home_user',
  'image',
  'info',
  'key',
  'keyboard',
  'line_menu',
  'list',
  'login',
  'logout',
  'minus',
  'money',
  'money_transfer',
  'new_file',
  'notes',
  'padlock',
  'page',
  'password_reset',
  'pencil',
  'plus',
  'preview',
  'printer',
  'refresh',
  'return',
  'save',
  'search',
  'search_chart',
  'search_list',
  'search_user',
  'security',
  'server',
  'share',
  'show_more',
  'sliders',
  'star',
  'stars',
  'sync',
  'trash',
  'trash_document',
  'upload',
  'upload_file',
  'upload_folder',
  'user_circle',
  'user_config',
  'users',
  'warning',
  'warning_circle',
  'x',
] as const;

export type IconType = typeof iconsList[number];

export interface Props extends React.SVGProps<SVGSVGElement> {
  icon: typeof iconsList[number];
  size: string | number;
}

const Icon = ({ icon, size = 24, ...rest }: Props) => {
  const Icon = Icons[icon];
  return <Icon width={size} height={size} {...rest} />;
};

export default Icon;
