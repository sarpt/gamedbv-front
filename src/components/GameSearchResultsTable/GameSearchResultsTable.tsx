import React from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { GameResultCell } from './GameSearchResultsTable.styles';

import { GameSummary } from '../GameSummary/GameSummary';

import { selectCurrentPage, selectGameResultsPerPage, selectGameSearchResults, selectGameSearchResultsTotal } from '../../store/selectors/gameSearchResultsSelectors';
import { dispatchChangePage, dispatchChangeResultsPerPage } from '../../store/actions/gameSearchResultsActions';

import { AppState } from '../../store/store';

type AdditionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const mapStateToProps = (state: AppState) => {
  return {
    games: selectGameSearchResults(state),
    gamesTotal: selectGameSearchResultsTotal(state),
    currentPage: selectCurrentPage(state),
    resultsPerPage: selectGameResultsPerPage(state),
  };
};

const mapDispatchToProps = {
  changePage: dispatchChangePage,
  changeResultsPerPage: dispatchChangeResultsPerPage,
};

const Component: React.FC<Props> = ({
  games,
  gamesTotal,
  currentPage,
  changePage,
  changeResultsPerPage,
  resultsPerPage,
}) => {
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeResultsPerPage({
      resultsPerPage: Number.parseInt(event.target.value, 10),
    });
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    changePage({
      page: newPage,
    });
  };

  return (
    <Table>
      <TableBody>
        {
          games.map(game => {
            return (
              <TableRow key={ game.serialNumber }>
                <GameResultCell>
                  <GameSummary
                    game={ game }
                  ></GameSummary>
                </GameResultCell>
              </TableRow>
            );
          })
        }
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            count={ gamesTotal }
            onChangePage={ handleChangePage }
            onChangeRowsPerPage={ handleChangeRowsPerPage }
            page={ currentPage }
            rowsPerPage={ resultsPerPage }
          ></TablePagination>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export const GameSearchResultsTable = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
