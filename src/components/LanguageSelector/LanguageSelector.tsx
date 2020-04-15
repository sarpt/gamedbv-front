import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { AppState } from '../../store/store';
import { selectPrefferedLanguageCode } from '../../store/selectors/appSettingsSelectors';

import { LanguageSelectIcon } from './LanguageSelector.styles';
import { Language } from '../../models/Language';

const mapStateToProps = (state: AppState) => {
  return {
    prefferedLanguageCode: selectPrefferedLanguageCode(state),
  };
};

const mapDispatchToProps = {};

type additionalProps = {
  languages: Language[],
  onLanguageSelect: (newLanguage: Language) => void,
};

type props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & additionalProps;

const Component: React.FC<props> = ({ languages, onLanguageSelect, prefferedLanguageCode }) => {
  const shouldDisableLanguageSelect = languages.length <= 1;

  const initialLanguage = React.useRef<Language | null>(null);
  if (initialLanguage.current === null) {
    initialLanguage.current = selectLanguage(prefferedLanguageCode, languages);
  }

  const [language, setLanguage] = React.useState<Language>(initialLanguage.current)
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLanguage = selectLanguage(event.target.value as string, languages);
    setLanguage(newLanguage);
    onLanguageSelect(newLanguage);
  };

  useEffect(() => {
    onLanguageSelect(initialLanguage.current!);
  }, [onLanguageSelect])

  return (
    <React.Fragment>
      <LanguageSelectIcon fontSize="small"></LanguageSelectIcon>
      <FormControl>
        <Select
          disabled={ shouldDisableLanguageSelect }
          value={ language.code }
          onChange={ handleLanguageChange }
        >
          {
            languages.map(lang => {
              return (
                <MenuItem key={ lang.code } value={ lang.code }>{ lang.name }</MenuItem>
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

function selectLanguage(languageCode: string, languages: Language[]): Language {
  return languages.find(language => language.code === languageCode)
    ?? { code: "EN", name: "English" };
}
