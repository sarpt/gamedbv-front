import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import { TextHeaderBig } from './common';

export const PanelPaper = styled(Paper)`
  margin-bottom: 10px;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 0.5rem;
  display: flex;
`;

export const Label = styled(TextHeaderBig)`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Content = styled.div`
  padding-top: 0.5rem;
  overflow-wrap: break-word;
`;
