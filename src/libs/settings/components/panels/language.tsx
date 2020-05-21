import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LanguageIcon from '@material-ui/icons/Language';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { AppState } from '../../../core/store/store';

import { fetchAvailableLanguages } from '../../../status/actions';
import { setPrefferedLanguageCode } from '../../actions';
import { selectPrefferedLanguageCode } from '../../selectors';
import { selectAvailableLanguages } from '../../../status/selectors';
import { Panel } from '../../../common/components/panel';

import { SelectLabel } from '../../../common/components/common.styles';

const languageSettingsLabel = 'Language settings';
const preffereLanguageLabel = 'Preffered games entries language (affects titles, descriptions, etc.). Defaults to English when preffered language not present.';

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
      label={ languageSettingsLabel }
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
