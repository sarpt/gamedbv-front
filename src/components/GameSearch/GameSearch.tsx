import React from 'react';
import { connect } from 'react-redux';

import { withTheme } from '@material-ui/core/styles';

import { AppState } from '../../store/store';
import {
  selectSelectedPage,
  selectSearchQuery,
  selectGames,
  selectRegions,
  selectPlatforms,
  selectGamesPerPage,
  selectGameSearchError
} from '../../store/selectors/gameSearchSelectors';
import { changeSearchQuery } from '../../store/actions/gameSearchActions';

import { GameQueryPanel, QueryPanelChanges } from '../GameQueryPanel/GameQueryPanel';
import { GameSearchResultsPanel, PaginationChanges } from '../GameSearchResultsPanel/GameSearchResultsPanel';
import { ErrorPanel } from '../ErrorPanel/ErrorPanel';

const GAME_SEARCH_ERROR = 'Search results error';

const mapStateToProps = (state: AppState) => {
  return {
    searchQuery: selectSearchQuery(state),
    searchedRegions: selectRegions(state),
    searchedPlatforms: selectPlatforms(state),
    games: selectGames(state),
    selectedGameResultsPage: selectSelectedPage(state),
    gameResultsPerPage: selectGamesPerPage(state),
    searchError: selectGameSearchError(state)
  };
};

const mapDispatchToProps = {
  changeSearchQuery
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {};

const GameSearch: React.FC<Props> = ({
  searchQuery,
  searchedRegions,
  searchedPlatforms,
  games,
  selectedGameResultsPage,
  gameResultsPerPage,
  changeSearchQuery,
  searchError
}) => {

  const handleQueryPanelChange = ({ query, regions, platforms }: QueryPanelChanges) => {
    changeSearchQuery({
      searchQuery: query,
      searchedRegions: regions,
      searchedPlatforms: platforms,
      selectedGameResultsPage,
      gameResultsPerPage
    });
  }

  const handleResultsPaginationChange = ({ page, resultsPerPage }: PaginationChanges) => {
    changeSearchQuery({
      searchQuery,
      searchedRegions,
      searchedPlatforms,
      selectedGameResultsPage: page,
      gameResultsPerPage: resultsPerPage
    });
  }

  return (
    <React.Fragment>
      <GameQueryPanel
        query={ searchQuery }
        regions={ searchedRegions }
        platforms={ searchedPlatforms }
        onChange={ handleQueryPanelChange }
      >
      </GameQueryPanel>
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
)(withTheme(GameSearch));
