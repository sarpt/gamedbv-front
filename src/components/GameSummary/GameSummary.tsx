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
} from './GameSummary.styles';

import { GameInfo } from '../../models/GameInfo';
import { Description } from '../../models/Description';

import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { Language } from '../../models/Language';

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

  const synopsis = description?.synopsis ?? "";
  const title = description?.title ?? "";

  return (
    <React.Fragment>
      <Header>
        <Title variant="body1">
          { title }
        </Title>
        <Id variant="body1">
          { game.serialNumber }
        </Id>
      </Header>
      <Body>
        <PlatformAndRegion>
          <Platform variant="body2">
            Platform: { game.platform.uid }
          </Platform>
          <Region variant="body2">
            Region: { game.region.code }
          </Region>
        </PlatformAndRegion>
        <Content>
          {
            synopsis.length > 0 && (
              <Synopsis variant="body2">
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
