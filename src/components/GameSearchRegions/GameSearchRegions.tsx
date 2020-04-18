import React from 'react';
import { connect } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PanelSection } from '../PanelSection/PanelSection';

import { AppState } from '../../store/store';
import { selectRegions } from '../../store/selectors/gameSearchSelectors';
import { addSearchedRegion, removeSearchedRegion } from '../../store/actions/gameSearchActions';
import { selectAvailableRegions } from '../../store/selectors/appInfoSelectors';
import { Region } from '../../models/Region';

const regionsLabel = 'Regions';

const mapStateToProps = (state: AppState) => {
  return {
    availableRegions: selectAvailableRegions(state),
    regions: selectRegions(state),
  };
};

const mapDispatchToProps = {
  dispatchAddSearchedRegion: addSearchedRegion,
  dispatchRemoveSearchedRegion: removeSearchedRegion,
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<Props> = ({
  availableRegions,
  regions,
  dispatchAddSearchedRegion,
  dispatchRemoveSearchedRegion,
}) => {
  const onRegionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatchAddSearchedRegion({ regionCode: event.target.value });

      return;
    }

    dispatchRemoveSearchedRegion({ regionCode: event.target.value });
  };

  const isRegionSet = (regionCheckbox: Region): boolean => {
    return regions.has(regionCheckbox.code);
  };

  return (
    <PanelSection label={regionsLabel}>
      {
        availableRegions.map(region => {
          return (
            <FormControlLabel
              key={ region.code }
              control={
                <Checkbox
                  checked={ isRegionSet(region) }
                  onChange={ onRegionsChange }
                  value={ region.code }
                ></Checkbox>
              }
              label={ region.code }
            ></FormControlLabel>
          );
        })
      }
    </PanelSection>
  );
};

export const GameSearchRegions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
