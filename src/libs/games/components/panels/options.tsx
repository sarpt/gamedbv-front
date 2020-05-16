import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import SearchIcon from '@material-ui/icons/Search';

import { Panel } from '../../../common/components/panel';
import { GameSearchRegions } from '../sections/regions';
import { GameSearchPlatforms } from '../sections/platforms';
import { GameSearchQuery } from '../sections/query';


import { Row } from './options.styles';

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
};
