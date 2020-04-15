import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 0.3em;
`;

export const Label = styled(Typography)`
  flex-grow: 0;
  flex-shrink: 0;
  border-bottom-style: dashed;
  border-bottom-width: thin;
  line-height: 1.3em;
`;

export const Content = styled.div`
  overflow-wrap: break-word;
`;
