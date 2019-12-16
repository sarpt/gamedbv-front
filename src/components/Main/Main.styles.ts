import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';

export const Main = withTheme(styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.palette.background.paper};
  display: flex;
  flex-direction: column;
`);

export const Content = styled.div`
  padding: 10px 24px;
  @media (max-width: 600px) {
    padding: 0;
    max-width: 600px;
  };
`;
