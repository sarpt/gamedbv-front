import styled from 'styled-components';

import TableCell from '@material-ui/core/TableCell';

// in order to support ellipsis inside table cell it has to have max-width for responisive cells
export const GameResultCell = styled(TableCell)`
  max-width: 0;
`;
