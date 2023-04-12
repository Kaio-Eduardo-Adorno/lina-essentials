import { defaultTheme } from '../../themes';
import styled from '../../utils/wrapper-styled-components';

export interface Props {
  text: string;
  children: any;
  position?: 'up' | 'down' | 'left' | 'right';
}

const ToolTipWrapper = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto';

  --balloon-border-radius: 4px;
  --balloon-color: ${(props) => props.theme.colors.white};
  --balloon-text-color: ${(props) => props.theme.colors.primary};
  --balloon-font-size: ${(props) => props.theme.fontSizes.small};
  --balloon-move: 4px;

  div[aria-label][data-balloon-pos] {
    overflow: visible;
  }

  [aria-label][data-balloon-pos] {
    position: relative;
    cursor: pointer;
  }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    border: 1px solid ${(props) => props.theme.colors.tertiary};
    padding: 0.5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10;
  }
  [aria-label][data-balloon-pos]:hover:after,
  [aria-label][data-balloon-pos][data-balloon-visible]:after,
  [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none;
  }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre;
  }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word;
  }
  [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none;
  }
  [aria-label][data-balloon-pos][data-balloon-pos*='-left']:after {
    left: 0;
  }
  [aria-label][data-balloon-pos][data-balloon-pos*='-right']:after {
    right: 0;
  }
  [aria-label][data-balloon-pos][data-balloon-pos*='-left']:hover:after,
  [aria-label][data-balloon-pos][data-balloon-pos*='-left'][data-balloon-visible]:after,
  [aria-label][data-balloon-pos][data-balloon-pos*='-right']:hover:after,
  [aria-label][data-balloon-pos][data-balloon-pos*='-right'][data-balloon-visible]:after {
    transform: translate(0, 0);
  }
  [aria-label][data-balloon-pos][data-balloon-pos^='up']:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move));
  }
  [aria-label][data-balloon-pos][data-balloon-pos^='up']:after {
    margin-bottom: 10px;
  }
  [aria-label][data-balloon-pos][data-balloon-pos='up']:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move));
  }
  [aria-label][data-balloon-pos][data-balloon-pos^='down']:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1));
  }
  [aria-label][data-balloon-pos][data-balloon-pos^='down']:after {
    margin-top: 10px;
  }
  [aria-label][data-balloon-pos][data-balloon-pos='down']:after,
  [aria-label][data-balloon-pos][data-balloon-pos='left']:hover:after,
  [aria-label][data-balloon-pos][data-balloon-pos='left'][data-balloon-visible]:after,
  [aria-label][data-balloon-pos][data-balloon-pos='right']:hover:after,
  [aria-label][data-balloon-pos][data-balloon-pos='right'][data-balloon-visible]:after {
    transform: translate(0, -50%);
  }
  [aria-label][data-balloon-pos][data-balloon-pos='left']:after {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%);
  }
  [aria-label][data-balloon-pos][data-balloon-pos='left']:after {
    margin-right: 10px;
  }
  [aria-label][data-balloon-pos][data-balloon-pos='right']:after,
  [aria-label][data-balloon-pos][data-balloon-pos='right']:after {
    margin-left: 10px;
  }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal;
  }
  [aria-label][data-balloon-pos][data-balloon-length='small']:after {
    width: 80px;
  }
  [aria-label][data-balloon-pos][data-balloon-length='medium']:after {
    width: 150px;
  }
  [aria-label][data-balloon-pos][data-balloon-length='large']:after {
    width: 260px;
  }
  [aria-label][data-balloon-pos][data-balloon-length='xlarge']:after {
    width: 380px;
  }
  @media screen and (max-width: 768px) {
    [aria-label][data-balloon-pos][data-balloon-length='xlarge']:after {
      width: 90vw;
    }
  }
  [aria-label][data-balloon-pos][data-balloon-length='fit']:after {
    width: 100%;
  }
`;
ToolTipWrapper.defaultProps = { theme: defaultTheme };

const ToolTip = ({ text, children, position = 'up' }: Props) => {
  return (
    <ToolTipWrapper>
      <div aria-label={text} data-balloon-pos={position}>
        {children}
      </div>
    </ToolTipWrapper>
  );
};

export default ToolTip;
