import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PanelSection } from '../PanelSection/PanelSection';

import { Platforms } from '../../models/Platforms';
import { selectPlatforms } from '../../store/selectors/gameSearchSelectors';
import { dispatchChangePlatforms } from '../../store/actions/gameSearchActions';
import { AppState } from '../../store/store';
import { connect } from 'react-redux';

const platformsLabel = 'Platforms';

type PlatformCheckbox = {
  label: string,
  value: Platforms,
};
const platformsCheckboxes: PlatformCheckbox[] = [
  {
    label: 'GameCube',
    value: Platforms.NGC,
  },
  {
    label: 'Wii',
    value: Platforms.WII,
  },
  {
    label: 'PlayStation3',
    value: Platforms.PS3,
  },
  {
    label: 'DS',
    value: Platforms.NDS,
  },
  {
    label: '3DS',
    value: Platforms.N3DS,
  },
  {
    label: 'Switch',
    value: Platforms.SWITCH,
  },
];

const mapStateToProps = (state: AppState) => {
  return {
    platforms: selectPlatforms(state),
  };
};

const mapDispatchToProps = {
  changePlatforms: dispatchChangePlatforms,
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<Props> = ({
  platforms,
  changePlatforms,
}) => {
  const onPlatformsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlatforms = { ...platforms, [event.target.value]: event.target.checked };

    changePlatforms({ platforms: newPlatforms });
  };

  const isPlatformSet = (platformCheckbox: PlatformCheckbox): boolean => {
    return platforms[platformCheckbox.value];
  };

  return (
    <PanelSection label={ platformsLabel }>
      {
        platformsCheckboxes.map(platformCheckbox => {
          return (
            <FormControlLabel
              key={ platformCheckbox.value }
              control={
                <Checkbox
                  checked={ isPlatformSet(platformCheckbox) }
                  onChange={ onPlatformsChange }
                  value={ platformCheckbox.value }
                ></Checkbox>
              }
              label={ platformCheckbox.label }
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
