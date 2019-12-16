import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/store';
import {
  selectGameSearchError
} from '../../store/selectors/gameSearchSelectors';

import { GameSearchOptionsPanel } from '../GameSearchOptionsPanel/GameSearchOptionsPanel';
import { GameSearchResultsPanel } from '../GameSearchResultsPanel/GameSearchResultsPanel';
import { ErrorPanel } from '../ErrorPanel/ErrorPanel';

const gameSearchErrorMessage = 'Search results error';

const mapStateToProps = (state: AppState) => {
  return {
    searchError: selectGameSearchError(state)
  };
};

const mapDispatchToProps = {};

type AdditionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const Component: React.FC<Props> = ({
  searchError
}) => {
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

export const GameSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
