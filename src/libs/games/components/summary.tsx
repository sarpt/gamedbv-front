import React, { useState, useCallback } from 'react';

import {
  Content,
  Header,
  Body,
  Title,
  Id,
  Platform,
  Region,
  Synopsis,
  PlatformAndRegion,
  Footer,
} from './summary.styles';

import { GameInfo } from '../../common/models/game-info';
import { Description } from '../../common/models/description';

import { LanguageSelector } from '../../common/components/forms/selects/language';
import { Language } from '../../common/models/language';

type Props = {
  game: GameInfo,
};

export const GameSummary: React.FC<Props> = ({ game }) => {
  const allLanguages = game.descriptions.map(desc => desc.language);
  const [description, setDescription] = useState<Description | null>(null);

  const handleLanguageChange = useCallback(
    (newLanguage: Language) => {
      const newDescripiton = getDescription(newLanguage, game.descriptions);
      setDescription(newDescripiton);
    },
    [game],
  );

  const synopsis = description?.synopsis ?? '';
  const title = description?.title ?? '';

  return (
    <React.Fragment>
      <Header>
        <Title>
          { title }
        </Title>
        <Id>
          { game.serialNumber }
        </Id>
      </Header>
      <Body>
        <PlatformAndRegion>
          <Platform>
            Platform: { game.platform.uid }
          </Platform>
          <Region>
            Region: { game.region.code }
          </Region>
        </PlatformAndRegion>
        <Content>
          {
            synopsis.length > 0 && (
              <Synopsis>
                { synopsis }
              </Synopsis>
            )
          }
        </Content>
      </Body>
      <Footer>
        <LanguageSelector
          languages={ allLanguages }
          onLanguageSelect={ handleLanguageChange }
        ></LanguageSelector>
      </Footer>
    </React.Fragment>
  );
};

function getDescription(language: Language, descriptions: Description[]): Description | null {
  const defaultDescription = descriptions[0] ?? null;

  return descriptions.find(desc => desc.language.code === language.code) ?? defaultDescription;
}
