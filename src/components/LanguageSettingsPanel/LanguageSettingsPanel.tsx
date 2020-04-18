import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LanguageIcon from '@material-ui/icons/Language';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { AppState } from '../../store/store';

import { fetchAvailableLanguages } from '../../store/actions/appInfoActions';
import { setPrefferedLanguageCode } from '../../store/actions/appSettingsActions';
import { selectPrefferedLanguageCode } from '../../store/selectors/appSettingsSelectors';
import { selectAvailableLanguages } from '../../store/selectors/appInfoSelectors';
import { Panel } from '../Panel/Panel';

import { SelectLabel } from './LanguageSettingsPanel.styles';

const languageSettingLabel = "Language settings";
const preffereLanguageLabel = "Preffered games entries language (affects titles, descriptions, etc.). Defaults to English when preffered language not present.";

const mapStateToProps = (state: AppState) => {
  return {
    prefferedLanguage: selectPrefferedLanguageCode(state),
    availableLanguages: selectAvailableLanguages(state),
  };
};

const mapDispatchToProps = {
  dispatchSetPrefferedLanguage: setPrefferedLanguageCode,
  dispatchFetchAvailableLanguages: fetchAvailableLanguages,
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<props> = ({
  prefferedLanguage,
  availableLanguages,
  dispatchSetPrefferedLanguage,
  dispatchFetchAvailableLanguages,
}) => {
  const handlePrefferedLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatchSetPrefferedLanguage({ language: event.target.value as string });
  };

  useEffect(() => {
    dispatchFetchAvailableLanguages();
  }, [dispatchFetchAvailableLanguages]);

  const areAnyLanguagesAvailable = availableLanguages.length > 0;

  return (
    <Panel
      label={ languageSettingLabel }
      icon={ <LanguageIcon></LanguageIcon> }
    >
      <SelectLabel
        control={
          <Select
            disabled={ !areAnyLanguagesAvailable }
            value={ prefferedLanguage }
            onChange={ handlePrefferedLanguageChange }
          >
            {
              availableLanguages.map(language => {
                return (
                  <MenuItem key={ language.code } value={ language.code }>{ language.name }</MenuItem>
                );
              })
            }
          </Select>
        }
        label={ preffereLanguageLabel }
      ></SelectLabel>
    </Panel>
  );
};

export const LanguageSettingsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
