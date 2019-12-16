import React from 'react';

import { GameSearch } from '../GameSearch/GameSearch';
import { ApplicationBar } from '../ApplicationBar/ApplicationBar';

import { Main, Content } from './Main.styles';

export const MainContainer: React.FC = () => {
  return (
    <Main>
      <ApplicationBar></ApplicationBar>
      <Content>
        <GameSearch></GameSearch>
      </Content>
    </Main>
  );
};
