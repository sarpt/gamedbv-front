import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import { TextHeaderBig } from '../../common/components/common';

export const MainToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
`;

export const Title = styled(TextHeaderBig)`
  flex-grow: 1;
  flex-shrink: 0;
`;

export const OptionsButton = styled(IconButton)`
  color: inherit;
`;
