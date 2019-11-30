import React from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import ViewListIcon from '@material-ui/icons/ViewList';

import { GameResult } from '../../models/GameResult';

import { Panel } from '../Panel/Panel';
import { GameResultRow } from '../GameResultRow/GameResultRow';
import { AppState } from '../../store/store';
import { selectSearchQuery } from '../../store/selectors/gameSearchSelectors';
import { selectCurrentPage, selectGameResultsPerPage, selectGameSearchResults } from '../../store/selectors/gameSearchResultsSelectors';
import { changePage, changeResultsPerPage } from '../../store/actions/gameSearchResultsActions';

const searchResultsLabel = 'Search results';
const noGameSearchResultMessage = 'No games with provided query were found';
const noQueryProvidedMessage = 'No search query provided';

const mapStateToProps = (state: AppState) => {
  return {
    searchQuery: selectSearchQuery(state),
    games: selectGameSearchResults(state),
    currentPage: selectCurrentPage(state),
    resultsPerPage: selectGameResultsPerPage(state)
  };
};

const mapDispatchToProps = {
  changePage,
  changeResultsPerPage
};

type AdditionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const GameSearchResultsPanel: React.FC<Props> = ({
  searchQuery,
  currentPage,
  resultsPerPage,
  games,
  changePage,
  changeResultsPerPage
}) => {
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeResultsPerPage({
      resultsPerPage: Number.parseInt(event.target.value, 10)
    });
    changePage({
      page: 0
    });
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    changePage({
      page: newPage
    });
  }

  const isSearchQueryProvided = searchQuery.length !== 0;

  return (
    <Panel
      label={ searchResultsLabel }
      icon={ <ViewListIcon /> }
    >
      {
        games.length !== 0 ? (
          <Table>
            <TableBody>
              {
                games.map((gameResult: GameResult) => {
                  return (
                    <GameResultRow key={ gameResult.id }
                      gameResult={ gameResult }
                    ></GameResultRow>
                  );
                })
              }
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={ games.length }
                  onChangePage={ handleChangePage }
                  onChangeRowsPerPage={ handleChangeRowsPerPage }
                  page={ currentPage }
                  rowsPerPage={ resultsPerPage }
                ></TablePagination>
              </TableRow>
            </TableFooter>
          </Table>
        ) : (
          <div>
            { isSearchQueryProvided ? noGameSearchResultMessage : noQueryProvidedMessage }
          </div>
        )
      }
    </Panel>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearchResultsPanel);
