import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import SearchIcon from '@material-ui/icons/Search';

import { Panel } from '../Panel/Panel';
import { GameSearchRegions } from '../GameSearchRegions/GameSearchRegions';
import { GameSearchPlatforms } from '../GameSearchPlatforms/GameSearchPlatforms';
import { GameSearchQuery } from '../GameSearchQuery/GameSearchQuery';


import { Row } from './GameSearchOptionsPanel.styles';

const gameSearchLabel = 'Game search';

type Props = {};

export const GameSearchOptionsPanel: React.FC<Props> = () => {
  return (
    <Panel
      label={ gameSearchLabel }
      icon={ <SearchIcon /> }
    >
      <FormGroup row={ false }>
        <Row>
          <GameSearchQuery></GameSearchQuery>
        </Row>
        <Row>
          <GameSearchRegions></GameSearchRegions>
        </Row>
        <Row>
          <GameSearchPlatforms></GameSearchPlatforms>
        </Row>
      </FormGroup>
    </Panel>
  );
}
