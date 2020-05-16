import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PanelSection } from '../../../common/components/panel-section';

import { selectPlatforms } from '../../selectors/search';
import { addSearchedPlatform, removeSearchedPlatform } from '../../actions/search';
import { AppState } from '../../../core/store/store';
import { connect } from 'react-redux';
import { selectAvailablePlatforms } from '../../../status/selectors';
import { Platform } from '../../../common/models/platform';

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
    return platforms.has(platform.uid);
  };

  return (
    <PanelSection label={ platformsLabel }>
      {
        availablePlatforms.map(platform => {
          return (
            <FormControlLabel
              key={ platform.uid }
              control={
                <Checkbox
                  checked={ isPlatformSet(platform) }
                  onChange={ onPlatformsChange }
                  value={ platform.uid }
                ></Checkbox>
              }
              label={ platform.name }
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
