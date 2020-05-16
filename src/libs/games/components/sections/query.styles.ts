import styled from 'styled-components';

import { DebouncedInput } from '../../../common/components/forms/inputs/debounced';

export const QueryInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`;

export const QueryInput = styled(DebouncedInput)`
  flex-grow: 1;
  flex-shrink: 1;
`;
