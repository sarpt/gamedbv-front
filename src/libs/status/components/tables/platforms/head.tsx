import React from 'react';
import { connect } from 'react-redux';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

import { selectPlatformsToUpdate } from '../../../selectors/updates';
import { selectPlatforms } from '../../../selectors/availability';

import { setPlatformsToUpdate } from '../../../actions/updates';
import { AppState } from '../../../../core/store/store';

import { HeadText } from './head.styles';

const mapStateToProps = (state: AppState) => {
  return {
    allPlatforms: selectPlatforms(state),
    selectedPlatforms: selectPlatformsToUpdate(state),
  };
};

const mapDistpatchToProps = {
  dispatchSelectPlatforms: setPlatformsToUpdate,
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDistpatchToProps & additionalProps;

const Component: React.FC<props> = ({ allPlatforms, selectedPlatforms, dispatchSelectPlatforms }) => {
  const onAllPlatformsSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatchSelectPlatforms({ platforms: allPlatforms });

      return;
    }

    dispatchSelectPlatforms({ platforms: [] });
  };

  const allPlatformsSelected = () => {
    return selectedPlatforms.length !== 0 && selectedPlatforms.length === allPlatforms.length;
  };

  const notAllPlatformsSelected = () => {
    return selectedPlatforms.length !== 0 && selectedPlatforms.length !== allPlatforms.length;
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={ notAllPlatformsSelected() }
            checked={ allPlatformsSelected() }
            onChange={ onAllPlatformsSelected }
          ></Checkbox>
        </TableCell>
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

export const PlatformsStatusTableHead = connect(
  mapStateToProps,
  mapDistpatchToProps,
)(Component);
