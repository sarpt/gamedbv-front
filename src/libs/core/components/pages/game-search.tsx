import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/store';
import {
  selectGameSearchError,
} from '../../../games/selectors/search';

import { GameSearchOptionsPanel } from '../../../games/components/panels/options';
import { GameSearchResultsPanel } from '../../../games/components/panels/results';
import { ErrorPanel } from '../../../common/components/error-panel';
import { fetchAvailableRegions, fetchAvailablePlatforms } from '../../../status/actions/availability';

const gameSearchErrorMessage = 'Search results error';

const mapStateToProps = (state: AppState) => {
  return {
    searchError: selectGameSearchError(state),
  };
};

const mapDispatchToProps = {
  dispatchFetchAvailableRegions: fetchAvailableRegions,
  dispatchFetchAvailablePlatforms: fetchAvailablePlatforms,
};

type AdditionalProps = {};
type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const Component: React.FC<props> = ({
  dispatchFetchAvailableRegions,
  dispatchFetchAvailablePlatforms,
  searchError,
}) => {
  useEffect(() => {
    dispatchFetchAvailableRegions();
    dispatchFetchAvailablePlatforms();
  }, [dispatchFetchAvailableRegions, dispatchFetchAvailablePlatforms]);

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
};

export const GameSearchPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
