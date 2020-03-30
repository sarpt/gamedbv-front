import React from 'react';

import {
  Content,
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
  game: GameInfo
};

export const GameSummary: React.FC<Props> = ({ game }) => {
  const description = game.descriptions[0]
  return (
    <React.Fragment>
      <Header>
        <Title variant="body1">
          { description.title }
        </Title>
        <Id variant="body1">
          { game.serialNumber }
        </Id>
      </Header>
      <Body>
        <PlatformAndRegion>
          <Platform variant="body2">
            Platform: { game.platform }
          </Platform>
          <Region variant="body2">
            Region: { game.region }
          </Region>
        </PlatformAndRegion>
        <Content>
          <Description variant="body2">
            { description.synopsis }
          </Description>
        </Content>
      </Body>
    </React.Fragment>
  );
};
