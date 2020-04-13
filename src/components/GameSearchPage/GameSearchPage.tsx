import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/store';
import {
  selectGameSearchError
} from '../../store/selectors/gameSearchSelectors';

import { GameSearchOptionsPanel } from '../GameSearchOptionsPanel/GameSearchOptionsPanel';
import { GameSearchResultsPanel } from '../GameSearchResultsPanel/GameSearchResultsPanel';
import { ErrorPanel } from '../ErrorPanel/ErrorPanel';
import { fetchAvailableRegions } from '../../store/actions/appInfoActions';

const gameSearchErrorMessage = 'Search results error';

const mapStateToProps = (state: AppState) => {
  return {
    searchError: selectGameSearchError(state)
  };
};

const mapDispatchToProps = {
  fetchAvailableRegions,
};

type AdditionalProps = {};
type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const Component: React.FC<props> = ({
  fetchAvailableRegions,
  searchError
}) => {
  useEffect(() => {
    fetchAvailableRegions();
  }, [fetchAvailableRegions]);

  return (
    <React.Fragment>
      <GameSearchOptionsPanel></GameSearchOptionsPanel>
      {
        searchError.hasError ? (
          <ErrorPanel
            label={ gameSearchErrorMessage }
            message={ searchError.message! }
          />
        ) : (
          <GameSearchResultsPanel></GameSearchResultsPanel>
        )
      }
    </React.Fragment>
  );
}

export const GameSearchPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
