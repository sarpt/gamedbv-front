import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PanelSection } from '../PanelSection/PanelSection';

import { selectPlatforms } from '../../store/selectors/gameSearchSelectors';
import { addSearchedPlatform, removeSearchedPlatform } from '../../store/actions/gameSearchActions';
import { AppState } from '../../store/store';
import { connect } from 'react-redux';
import { selectAvailablePlatforms } from '../../store/selectors/appInfoSelectors';
import { Platform } from '../../models/Platform';

const platformsLabel = 'Platforms';

const mapStateToProps = (state: AppState) => {
  return {
    availablePlatforms: selectAvailablePlatforms(state),
    platforms: selectPlatforms(state),
  };
};

const mapDispatchToProps = {
  dispatchAddSearchedPlatform: addSearchedPlatform,
  dispatchRemoveSearchedPlatform: removeSearchedPlatform,
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<Props> = ({
  availablePlatforms,
  platforms,
  dispatchAddSearchedPlatform,
  dispatchRemoveSearchedPlatform,
}) => {
  const onPlatformsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatchAddSearchedPlatform({ platformId: event.target.value });

      return;
    }

    dispatchRemoveSearchedPlatform({ platformId: event.target.value });
  };

  const isPlatformSet = (platform: Platform): boolean => {
    return platforms.has(platform.code);
  };

  return (
    <PanelSection label={ platformsLabel }>
      {
        availablePlatforms.map(platform => {
          return (
            <FormControlLabel
              key={ platform.code }
              control={
                <Checkbox
                  checked={ isPlatformSet(platform) }
                  onChange={ onPlatformsChange }
                  value={ platform.code }
                ></Checkbox>
              }
              label={ platform.code }
            ></FormControlLabel>
          );
        })
      }
    </PanelSection>
  );
};

export const GameSearchPlatforms = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
