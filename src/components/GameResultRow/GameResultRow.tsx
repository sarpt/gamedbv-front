import React from 'react';

import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { GameResult } from '../../models/GameResult';

import { useStyles } from './GameResultRow.styles';

type Props = {
  gameResult: GameResult;
};

export const GameResultRow: React.FC<Props> = ({ gameResult }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>
        <div className={ classes['upper-game-row'] }>
          <Typography variant="body2">
            { gameResult.name }
          </Typography>
          <Typography variant="body2">
            { gameResult.region }
          </Typography>
          <Typography variant="body2">
            { gameResult.id }
          </Typography>
        </div>
        <div className={ classes['lower-game-row'] }>
          <Typography variant="body2">
            { gameResult.description }
          </Typography>
        </div>
      </TableCell>
    </TableRow>
  );
};
