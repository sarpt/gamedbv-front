import React from 'react';

import {
  Header,
  Body,
  Title,
  Id,
  Platform,
  Region,
  Description,
  PlatformAndRegion
} from './GameSummary.styles';

import { GameInfo } from '../../models/GameInfo';

type Props = {
  gameResult: GameInfo
};

export const GameSummary: React.FC<Props> = ({ gameResult }) => {
  return (
    <React.Fragment>
      <Header>
        <Title variant="body1">
          { gameResult.name }
        </Title>
        <Id variant="body1">
          { gameResult.id }
        </Id>
      </Header>
      <Body>
        <PlatformAndRegion>
          <Platform variant="body2">
            Platform: { gameResult.platform }
          </Platform>
          <Region variant="body2">
            Region: { gameResult.region }
          </Region>
        </PlatformAndRegion>
        <Description variant="body2">
          { gameResult.description }
        </Description>
      </Body>
    </React.Fragment>
  );
};
