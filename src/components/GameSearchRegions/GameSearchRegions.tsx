import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Regions, RegionsMap } from '../../models/Regions';

const regionsLabel = 'Regions';
export const regionsControlName = 'region';

type Props = {
  regions: RegionsMap,
  onRegionsChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

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

export const GameSearchRegions: React.FC<Props> = ({ 
  regions,
  onRegionsChange
}) => {

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
                  name={ regionsControlName }
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
