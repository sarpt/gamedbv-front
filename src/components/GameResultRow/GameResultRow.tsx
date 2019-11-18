import React from 'react';

import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { GameResult } from '../../models/GameResult';

import { UpperGameRow, LowerGameRow } from './GameResultRow.styles';

type Props = {
  gameResult: GameResult;
};

export const GameResultRow: React.FC<Props> = ({ gameResult }) => {
  return (
    <TableRow>
      <TableCell>
        <UpperGameRow>
          <Typography variant="body2">
            { gameResult.name }
          </Typography>
          <Typography variant="body2">
            { gameResult.region }
          </Typography>
          <Typography variant="body2">
            { gameResult.id }
          </Typography>
        </UpperGameRow>
        <LowerGameRow>
          <Typography variant="body2">
            { gameResult.description }
          </Typography>
        </LowerGameRow>
      </TableCell>
    </TableRow>
  );
};
