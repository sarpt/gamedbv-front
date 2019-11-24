import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import SearchIcon from '@material-ui/icons/Search';

import { RegionsMap } from '../../models/Regions';
import { PlatformsMap } from '../../models/Platforms';

import { Panel } from '../Panel/Panel';
import { GameSearchRegions, regionsControlName } from '../GameSearchRegions/GameSearchRegions';
import { GameSearchPlatforms, platformsControlName } from '../GameSearchPlatforms/GameSearchPlatforms';
import { 
  GameSearchQuery,
  queryControlName,
  shouldGetAllGamesControlName
} from '../GameSearchQuery/GameSearchQuery';

import { Row } from './GameSearchOptionsPanel.styles';

const gameSearchLabel = 'Game search';

export type GameSearchOptionsChanges = {
  query: string,
  shouldGetAllGames: boolean,
  regions: RegionsMap,
  platforms: PlatformsMap
};

type Props = {
  query: string,
  shouldGetAllGames: boolean,
  regions: RegionsMap,
  platforms: PlatformsMap,
  onChange: (changes: GameSearchOptionsChanges) => void
};

export const GameSearchOptionsPanel: React.FC<Props> = ({
  query,
  shouldGetAllGames,
  regions,
  platforms,
  onChange
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changes = {
      query,
      regions,
      shouldGetAllGames,
      platforms
    };

    switch (event.target.name) {
      case queryControlName:
        changes.query = event.target.value;
        break;
      case shouldGetAllGamesControlName:
        changes.shouldGetAllGames = event.target.checked;
        break;
      case regionsControlName:
        changes.regions = { ...changes.regions, [event.target.value]: event.target.checked };
        break;
      case platformsControlName:
        changes.platforms = { ...changes.platforms, [event.target.value]: event.target.checked };
        break;
      default:
    }

    onChange(changes);
  };

  return (
    <Panel
      label={ gameSearchLabel }
      icon={ <SearchIcon /> }
    >
      <FormGroup row={ false }>
        <Row>
          <GameSearchQuery
            query={ query }
            onQueryChange={ handleInputChange }
            shouldGetAllGames={ shouldGetAllGames }
          ></GameSearchQuery>
        </Row>
        <Row>
          <GameSearchRegions
            regions={ regions }
            onRegionsChange={ handleInputChange }
          ></GameSearchRegions>
        </Row>
        <Row>
          <GameSearchPlatforms
            platforms={ platforms }
            onPlatformsChange={ handleInputChange }
          ></GameSearchPlatforms>
        </Row>
      </FormGroup>
    </Panel>
  );
}