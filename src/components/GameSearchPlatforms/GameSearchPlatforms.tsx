import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PlatformsMap, Platforms } from '../../models/Platforms';

const platformsLabel = 'Platforms';
export const platformsControlName = 'platforms';

type PlatformCheckbox = {
  label: string,
  value: Platforms
};
const platformsCheckboxes: PlatformCheckbox[] = [
  {
    label: 'GameCube',
    value: Platforms.NGC
  },
  {
    label: 'Wii',
    value: Platforms.WII
  }
];

type Props = {
  platforms: PlatformsMap,
  onPlatformsChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const GameSearchPlatforms: React.FC<Props> = ({
  platforms,
  onPlatformsChange
}) => {
  const isPlatformSet = (platformCheckbox: PlatformCheckbox): boolean => {
    return platforms[platformCheckbox.value];
  };

  return (
    <React.Fragment>
      <Typography variant="h6">
        { platformsLabel }
      </Typography>
      {
        platformsCheckboxes.map(platformCheckbox => {
          return (
            <FormControlLabel
              key={ platformCheckbox.value }
              control={
                <Checkbox
                  checked={ isPlatformSet(platformCheckbox) }
                  name={ platformsControlName }
                  onChange={ onPlatformsChange }
                  value={ platformCheckbox.value }
                ></Checkbox>
              }
              label={ platformCheckbox.label }
            ></FormControlLabel>
          );
        })
      }
    </React.Fragment>
  );
};
