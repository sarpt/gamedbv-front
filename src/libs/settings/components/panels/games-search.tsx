import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';

import { AppState } from '../../../core/store/store';

import { Panel } from '../../../common/components/panel';

import { SelectLabel } from '../../../common/components/common.styles';
import { selectShowOnlyAvailablePlatforms } from '../../selectors';
import { setShowOnlyAvailablePlatforms } from '../../actions';

const gamesQuerySettingsLabel = "Game search settings";
const showOnlyAvailablePlatformsLabel = "Show available platforms only. By checking this, only platforms that are searchable (were downloaded and indexed) will be shown in the search options.";

const mapStateToProps = (state: AppState) => {
  return {
    showAvailablePlatformsOnly: selectShowOnlyAvailablePlatforms(state),
  };
};

const mapDispatchToProps = {
  dispatchSetShowIndexedPlatformsOnly: setShowOnlyAvailablePlatforms,
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<props> = ({
  showAvailablePlatformsOnly,
  dispatchSetShowIndexedPlatformsOnly,
}) => {
  const onShowIndexedPlatformsOnlyChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    dispatchSetShowIndexedPlatformsOnly({ show: event.target.checked });
  };

  return (
    <Panel
      label={ gamesQuerySettingsLabel }
      icon={ <SearchIcon></SearchIcon> }
    >

      <SelectLabel
        control={
          <Checkbox
            checked={ showAvailablePlatformsOnly }
            onChange={ onShowIndexedPlatformsOnlyChange }
            value={ showAvailablePlatformsOnly }
          ></Checkbox>
        }
        label={ showOnlyAvailablePlatformsLabel }
      ></SelectLabel>
    </Panel>
  );
};

export const GamesQuerySettingsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
