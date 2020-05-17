import React from 'react';

import { LanguageSettingsPanel } from '../../../settings/components/panels/language';
import { GamesQuerySettingsPanel } from '../../../settings/components/panels/games-search';

type props = {};

export const SettingsPage: React.FC<props> = () => {
  return (
    <React.Fragment>
      <LanguageSettingsPanel></LanguageSettingsPanel>
      <GamesQuerySettingsPanel></GamesQuerySettingsPanel>
    </React.Fragment>
  );
};
