import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import {
  Content,
  Header,
  Body,
  Title,
  Id,
  Platform,
  Region,
  Description,
  PlatformAndRegion,
  Footer,
  LanguageSelectIcon
} from './GameSummary.styles';

import { GameInfo } from '../../models/GameInfo';
import { selectPreferredLanguage } from '../../functions/languageUtils';
type Props = {
  game: GameInfo
};

export const GameSummary: React.FC<Props> = ({ game }) => {
  const allLanguages = game.descriptions.map(description => description.language);
  const shouldDisableLanguageSelect = allLanguages.length <= 1;

  const initialLanguage = React.useRef<string | null>(null);
  if (initialLanguage.current === null) {
    initialLanguage.current = selectPreferredLanguage(allLanguages);
  }

  const [language, setLanguage] = React.useState<string>(initialLanguage.current)
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string)
  };

  const description = game.descriptions.find(description => description.language === language) ?? game.descriptions[0];
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
          {
            description.synopsis.length > 0 && (
              <Description variant="body2">
                { description.synopsis }
              </Description>
            )
          }
        </Content>
      </Body>
      <Footer>
        <LanguageSelectIcon fontSize="small"></LanguageSelectIcon>
        <FormControl>
          <Select
            disabled={ shouldDisableLanguageSelect }
            value={ language }
            onChange={ handleLanguageChange }
          >
            {
              allLanguages.map(language => {
                return (
                  <MenuItem key={ language } value={ language }>{ language }</MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
      </Footer>
    </React.Fragment>
  );
};
