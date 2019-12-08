import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

export const QueryInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`;

export const QueryInput = styled(TextField)`
  flex-grow: 1;
  flex-shrink: 1;
`;
