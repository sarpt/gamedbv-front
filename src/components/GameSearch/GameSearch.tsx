import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/store';
import {
  selectSelectedPage,
  selectSearchQuery,
  selectGames,
  selectRegions,
  selectPlatforms,
  selectGamesPerPage,
  selectGameSearchError,
  selectShouldGetAllGames
} from '../../store/selectors/gameSearchSelectors';
import { changeSearchOptions } from '../../store/actions/gameSearchActions';

import { GameSearchOptionsPanel } from '../GameSearchOptionsPanel/GameSearchOptionsPanel';
import { GameSearchResultsPanel, PaginationChanges } from '../GameSearchResultsPanel/GameSearchResultsPanel';
import { ErrorPanel } from '../ErrorPanel/ErrorPanel';

const GAME_SEARCH_ERROR = 'Search results error';

const mapStateToProps = (state: AppState) => {
  return {
    searchQuery: selectSearchQuery(state),
    searchedRegions: selectRegions(state),
    searchedPlatforms: selectPlatforms(state),
    shouldGetAllGames: selectShouldGetAllGames(state),
    games: selectGames(state),
    selectedGameResultsPage: selectSelectedPage(state),
    gameResultsPerPage: selectGamesPerPage(state),
    searchError: selectGameSearchError(state)
  };
};

const mapDispatchToProps = {
  changeSearchQuery: changeSearchOptions
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {};

const GameSearch: React.FC<Props> = ({
  searchQuery,
  searchedRegions,
  searchedPlatforms,
  shouldGetAllGames,
  games,
  selectedGameResultsPage,
  gameResultsPerPage,
  changeSearchQuery,
  searchError
}) => {
  const handleResultsPaginationChange = ({
    page,
    resultsPerPage
  }: PaginationChanges) => {
    changeSearchQuery({
      searchQuery,
      shouldGetAllGames,
      searchedRegions,
      searchedPlatforms,
      selectedGameResultsPage: page,
      gameResultsPerPage: resultsPerPage
    });
  }

  return (
    <React.Fragment>
      <GameSearchOptionsPanel></GameSearchOptionsPanel>
      {
        searchError.hasError ? (
          <ErrorPanel
            label={ GAME_SEARCH_ERROR }
            message={ searchError.message! }
          />
        ) : (
          <GameSearchResultsPanel
            page={ selectedGameResultsPage }
            results={ games }
            resultsPerPage={ gameResultsPerPage }
            isSearchQueryProvided={ searchQuery.length !== 0 }
            onPaginationChange={ handleResultsPaginationChange }
          />
        )
      }
    </React.Fragment>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearch);
