import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

export const MainToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
`;

export const Title = styled(Typography)`
  flex-grow: 1;
  flex-shrink: 0;
`;

export const OptionsButton = styled(IconButton)`
  color: inherit;
`;
