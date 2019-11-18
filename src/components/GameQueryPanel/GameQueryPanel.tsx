import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';

import { RegionsMap, Regions } from '../../models/Regions';
import { PlatformsMap, Platforms } from '../../models/Platforms';

import { Panel } from '../Panel/Panel';
import { Row } from './GameQueryPanel.styles';

const inputPlaceholder = 'game name, description, id, etc.';
const inputLabel = 'Search query';
const gameSearchLabel = 'Game search';
const regionsLabel = 'Regions';
const platformsLabel = 'Platforms';

export type QueryPanelChanges = {
  query: string,
  regions: RegionsMap,
  platforms: PlatformsMap
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
  query: string,
  regions: RegionsMap,
  platforms: PlatformsMap,
  onChange: (changes: QueryPanelChanges) => void
};
export const GameQueryPanel: React.FC<Props> = ({
  query,
  regions,
  platforms,
  onChange
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changes = {
      query,
      regions,
      platforms
    };

    switch (event.target.name) {
      case 'query':
        changes.query = event.target.value;
        break;
      case 'region':
        changes.regions = { ...changes.regions, [event.target.value]: event.target.checked };
        break;
      case 'platform':
        changes.platforms = { ...changes.platforms, [event.target.value]: event.target.checked };
        break;
      default:
    }

    onChange(changes);
  };

  const isRegionSet = (regionCheckbox: RegionCheckbox): boolean => {
    return regions[regionCheckbox.value];
  };

  const isPlatformSet = (platformCheckbox: PlatformCheckbox): boolean => {
    return platforms[platformCheckbox.value];
  };

  return (
    <Panel
      label={ gameSearchLabel }
      icon={ <SearchIcon /> }
    >
      <FormGroup row={ false }>
        <Row>
          <TextField
            name='query'
            onChange={ handleInputChange }
            value={ query }
            placeholder={ inputPlaceholder }
            label={ inputLabel }
          ></TextField>
        </Row>
        <Row>
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
                      name="region"
                      onChange={ handleInputChange }
                      value={ regionsCheckbox.value }
                    ></Checkbox>
                  }
                  label={ regionsCheckbox.label }
                ></FormControlLabel>
              );
            })
          }
        </Row>
        <Row>
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
                      name="platform"
                      onChange={ handleInputChange }
                      value={ platformCheckbox.value }
                    ></Checkbox>
                  }
                  label={ platformCheckbox.label }
                ></FormControlLabel>
              );
            })
          }
        </Row>
      </FormGroup>
    </Panel>
  );
}