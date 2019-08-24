import React from 'react';
import { connect } from 'react-redux';

import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { AppState } from '../../store/store';
import { 
    selectSelectedPage,
    selectSearchQuery,
    selectGames,
    selectRegions,
    selectPlatforms,
    selectGamesPerPage
} from '../../store/selectors/gameSearchSelectors';
import { changeSearchQuery } from '../../store/actions/gameSearchActions';

import { GameQueryPanel, QueryPanelChanges } from '../GameQueryPanel/GameQueryPanel';
import { GameSearchResults, PaginationChanges } from '../GameSearchResults/GameSearchResults';

const mapStateToProps = (state: AppState) => {
    return {
        searchQuery: selectSearchQuery(state),
        searchedRegions: selectRegions(state),
        searchedPlatforms: selectPlatforms(state),
        games: selectGames(state),
        selectedGameResultsPage: selectSelectedPage(state),
        gameResultsPerPage: selectGamesPerPage(state)
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
    changeSearchQuery
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
        <Paper>
            <GameQueryPanel
                query={ searchQuery }
                regions={ searchedRegions }
                platforms={ searchedPlatforms }
                onChange={ handleQueryPanelChange }
            >
            </GameQueryPanel>
            <GameSearchResults
                page={ selectedGameResultsPage }
                results={ games }
                resultsPerPage={ gameResultsPerPage }
                onPaginationChange={ handleResultsPaginationChange }
            ></GameSearchResults>
        </Paper>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(GameSearch));
