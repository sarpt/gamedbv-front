import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Platforms } from '../../models/Platforms';
import { selectPlatforms } from '../../store/selectors/gameSearchSelectors';
import { changePlatforms } from '../../store/actions/gameSearchActions';
import { AppState } from '../../store/store';
import { connect } from 'react-redux';

const platformsLabel = 'Platforms';

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

const mapStateToProps = (state: AppState) => {
  return {
    platforms: selectPlatforms(state)
  };
};

const mapDispatchToProps = {
  changePlatforms
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const GameSearchPlatforms: React.FC<Props> = ({
  platforms,
  changePlatforms
}) => {
  const onPlatformsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlatforms = { ...platforms, [event.target.value]: event.target.checked };

    changePlatforms({ platforms: newPlatforms });
  };

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearchPlatforms);