import React from 'react';
import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { AppState } from '../../store/store';
import { selectPrefferedLanguage } from '../../store/selectors/appSettingsSelectors';

import { LanguageSelectIcon } from './LanguageSelector.styles';

const mapStateToProps = (state: AppState) => {
  return {
    prefferedLanguage: selectPrefferedLanguage(state),
  };
};

const mapDispatchToProps = {};

type additionalProps = {
  languages: string[],
  onLanguageSelect: (newLanguage: string) => void,
};

type props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & additionalProps;

const Component: React.FC<props> = ({ languages, onLanguageSelect, prefferedLanguage }) => {
  const shouldDisableLanguageSelect = languages.length <= 1;

  const initialLanguage = React.useRef<string | null>(null);
  if (initialLanguage.current === null) {
    initialLanguage.current = selectLanguage(prefferedLanguage, languages);
    onLanguageSelect(prefferedLanguage);
  }

  const [language, setLanguage] = React.useState<string>(initialLanguage.current)
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLanguage = event.target.value as string;
    setLanguage(newLanguage);
    onLanguageSelect(newLanguage);
  };

  return (
    <React.Fragment>
      <LanguageSelectIcon fontSize="small"></LanguageSelectIcon>
      <FormControl>
        <Select
          disabled={ shouldDisableLanguageSelect }
          value={ language }
          onChange={ handleLanguageChange }
        >
          {
            languages.map(language => {
              return (
                <MenuItem key={ language } value={ language }>{ language }</MenuItem>
              );
            })
          }
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export const LanguageSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

function selectLanguage(prefferedLanguage: string, languages: string[]): string {
  return languages.some(language => language === prefferedLanguage)
    ? prefferedLanguage
    : languages[0];
}
