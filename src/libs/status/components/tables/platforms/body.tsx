import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { connect } from 'react-redux';
import { AppState } from '../../../../core/store/store';
import { selectPlatforms } from '../../../selectors';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { IndexedIcon, NotIndexedIcon, RowText } from './body.styles';

const mapStateToProps = (state: AppState) => {
  return {
    platforms: selectPlatforms(state),
  };
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & additionalProps;

export const Component: React.FC<props> = ({ platforms }) => {
  return (
    <TableBody>
      {
        platforms.map(platform => {
          return (
            <TableRow key={ platform.uid }>
              <TableCell>
                <RowText>
                    {
                      platform.name
                    }
                </RowText>
              </TableCell>
              <TableCell>
                <RowText>
                    {
                      platform.indexed ? <IndexedIcon></IndexedIcon> : <NotIndexedIcon></NotIndexedIcon>
                    }
                </RowText>
              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  );
};

export const PlatformsStatusTableBody = connect(mapStateToProps)(Component);
