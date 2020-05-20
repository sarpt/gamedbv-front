import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { HeadText } from './head.styles';

type props = {};
export const PlatformsStatusTableHead: React.FC<props> = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <HeadText>
            Name
          </HeadText>
        </TableCell>
        <TableCell>
          <HeadText>
            Indexed
          </HeadText>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
