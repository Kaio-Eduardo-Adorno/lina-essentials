import styled from '../../utils/wrapper-styled-components';

export const CustomScrollBar = styled('div')`
  overflow-y: scroll;
  --scrollbar-size: 0.375rem;
  --scrollbar-minlength: 1.5rem; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */
  --scrollbar-ff-width: thin; /* FF-only accepts auto, thin, none */
  --scrollbar-track-color: transparent;
  --scrollbar-color: ${(props) => props.theme.colors.primary};
  --scrollbar-color-hover: ${(props) => props.theme.colors.quaternary};
  --scrollbar-color-active: ${(props) => props.theme.colors.secondary};
  transition: all 300ms;
  overscroll-behavior: contain;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-width: var(--scrollbar-ff-width);
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);
  /* Only apply height/width to ::-webkit-scrollbar if is obtrusive */
  ::-webkit-scrollbar {
    height: var(--scrollbar-size);
    width: var(--scrollbar-size);
  }
  ::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track-color);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-color-hover);
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: var(--scrollbar-color-active);
  }
  ::-webkit-scrollbar-thumb:vertical {
    min-height: var(--scrollbar-minlength);
  }
  ::-webkit-scrollbar-thumb:horizontal {
    min-width: var(--scrollbar-minlength);
  }
`;
