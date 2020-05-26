import React from 'react';
import { connect } from 'react-redux';

import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

import { AppState } from '../../../../core/store/store';
import { selectPlatforms } from '../../../selectors/availability';
import { setPlatformsToUpdate } from '../../../actions/updates';
import {
  selectPlatformsToUpdate,
  selectPlatformsBeingUpdated,
  platformsUpdateInProgress,
} from '../../../selectors/updates';
import { Platform } from '../../../../common/models/platform';

import { IndexedIcon, NotIndexedIcon, RowText } from './body.styles';

const mapStateToProps = (state: AppState) => {
  return {
    allPlatforms: selectPlatforms(state),
    selectedPlatforms: selectPlatformsToUpdate(state),
    platformsBeingUpdated: selectPlatformsBeingUpdated(state),
    updateInProgress: platformsUpdateInProgress(state),
  };
};

const mapDispatchToProps = {
  dispatchSelectPlatformsForUpdate: setPlatformsToUpdate,
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

function indexStatusIcon(platform: Platform) {
  if (platform.indexed) {
    return <IndexedIcon />;
  }

  return <NotIndexedIcon />;
}

export const Component: React.FC<props> = ({
  allPlatforms,
  selectedPlatforms,
  platformsBeingUpdated,
  updateInProgress,
  dispatchSelectPlatformsForUpdate,
}) => {
  const platformSelected = (platform: Platform) => {
    return selectedPlatforms.some(selectedPlatform => selectedPlatform.uid === platform.uid);
  };

  const getTogglePlatform = (platform: Platform) => {
    return () => {
      if (updateInProgress) return;

      const platformIdx = selectedPlatforms.findIndex(selectedPlatform => selectedPlatform.uid === platform.uid);
      const platformsToBeSelected = platformIdx === -1
        ? [...selectedPlatforms, platform]
        : [...selectedPlatforms.slice(0, platformIdx), ...selectedPlatforms.slice(platformIdx + 1, selectedPlatforms.length)];

      dispatchSelectPlatformsForUpdate({ platforms: platformsToBeSelected });
    };
  };

  const platformBeingUpdated = (platform: Platform) => {
    return platformsBeingUpdated.some(platformInProgress => platformInProgress.uid === platform.uid);
  };

  return (
    <TableBody>
      {
        allPlatforms.map(platform => {
          return (
            <TableRow key={ platform.uid } onClick={ getTogglePlatform(platform) }>
              <TableCell padding="checkbox">
                <Checkbox
                  disabled={ updateInProgress }
                  checked={ platformSelected(platform) }
                  onChange={ () => false }
                ></Checkbox>
              </TableCell>
              <TableCell>
                <RowText>
                    {
                      platform.name
                    }
                </RowText>
              </TableCell>
              <TableCell>
                {
                  platformBeingUpdated(platform)
                    ? <CircularProgress size="1.5rem"/>
                    : <RowText>{ indexStatusIcon(platform) }</RowText>
                }
              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  );
};

export const PlatformsStatusTableBody = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
