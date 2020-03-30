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
  gameResult: GameInfo
};

export const GameSummary: React.FC<Props> = ({ gameResult }) => {
  const description = gameResult.descriptions[0]
  return (
    <React.Fragment>
      <Header>
        <Title variant="body1">
          { description.title }
        </Title>
        <Id variant="body1">
          { gameResult.serialNumber }
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
        <Content>
          <Description variant="body2">
            { description.synopsis }
          </Description>
        </Content>
      </Body>
    </React.Fragment>
  );
};
