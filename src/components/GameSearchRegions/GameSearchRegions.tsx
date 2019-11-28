import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Regions } from '../../models/Regions';
import { AppState } from '../../store/store';
import { selectRegions } from '../../store/selectors/gameSearchSelectors';
import { changeRegions } from '../../store/actions/gameSearchActions';
import { connect } from 'react-redux';

const regionsLabel = 'Regions';

type RegionCheckbox = {
  label: string,
  value: Regions
};

const regionsCheckboxes: RegionCheckbox[] = [
  {
    label: 'NTSC-U',
    value: Regions.NTSCU
  },
  {
    label: 'NTSC-J',
    value: Regions.NTSCJ
  },
  {
    label: 'PAL',
    value: Regions.PAL
  },
  {
    label: 'Other',
    value: Regions.OTHER
  }
];

const mapStateToProps = (state: AppState) => {
  return {
    regions: selectRegions(state)
  };
};

const mapDispatchToProps = {
  changeRegions
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const GameSearchRegions: React.FC<Props> = ({ 
  regions,
  changeRegions 
}) => {
  const onRegionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRegions = { ...regions, [event.target.value]: event.target.checked };

    changeRegions({ regions: newRegions });
  };
  const isRegionSet = (regionCheckbox: RegionCheckbox): boolean => {
    return regions[regionCheckbox.value];
  };

  return (
    <React.Fragment>
      <Typography variant="h6">
        { regionsLabel }
      </Typography>
      {
        regionsCheckboxes.map(regionsCheckbox => {
          return (
            <FormControlLabel
              key={ regionsCheckbox.value }
              control={
                <Checkbox
                  checked={ isRegionSet(regionsCheckbox) }
                  onChange={ onRegionsChange }
                  value={ regionsCheckbox.value }
                ></Checkbox>
              }
              label={ regionsCheckbox.label }
            ></FormControlLabel>
          );
        })
      }
    </React.Fragment>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearchRegions);
