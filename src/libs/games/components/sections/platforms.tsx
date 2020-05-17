import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PanelSection } from '../../../common/components/panel-section';

import { selectSearchedPlatforms } from '../../selectors/search';
import { addSearchedPlatform, removeSearchedPlatform } from '../../actions/search';
import { AppState } from '../../../core/store/store';
import { connect } from 'react-redux';
import { selectPlatforms, selectAvailablePlatforms } from '../../../status/selectors';
import { Platform } from '../../../common/models/platform';
import { selectShowOnlyAvailablePlatforms } from '../../../settings/selectors';

const platformsLabel = 'Platforms';

const mapStateToProps = (state: AppState) => {
  return {
    searchedPlatforms: selectSearchedPlatforms(state),
    showOnlyAvailablePlatforms: selectShowOnlyAvailablePlatforms(state),
    platforms: selectPlatforms(state),
    availablePlatforms: selectAvailablePlatforms(state),
  };
};

const mapDispatchToProps = {
  dispatchAddSearchedPlatform: addSearchedPlatform,
  dispatchRemoveSearchedPlatform: removeSearchedPlatform,
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<Props> = ({
  platforms,
  availablePlatforms,
  showOnlyAvailablePlatforms,
  searchedPlatforms,
  dispatchAddSearchedPlatform,
  dispatchRemoveSearchedPlatform,
}) => {
  const plats = showOnlyAvailablePlatforms ? availablePlatforms : platforms;

  const onPlatformsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatchAddSearchedPlatform({ platformId: event.target.value });

      return;
    }

    dispatchRemoveSearchedPlatform({ platformId: event.target.value });
  };

  const isPlatformSet = (platform: Platform): boolean => {
    return searchedPlatforms.has(platform.uid);
  };

  return (
    <PanelSection label={ platformsLabel }>
      {
        plats.map(platform => {
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
