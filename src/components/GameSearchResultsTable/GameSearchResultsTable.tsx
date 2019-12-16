import React from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';

import { GameSummary } from '../GameSummary/GameSummary';

import { selectCurrentPage, selectGameResultsPerPage, selectGameSearchResults } from '../../store/selectors/gameSearchResultsSelectors';
import { changePage, changeResultsPerPage } from '../../store/actions/gameSearchResultsActions';

import { GameInfo } from '../../models/GameInfo';
import { AppState } from '../../store/store';

type AdditionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const mapStateToProps = (state: AppState) => {
  return {
    games: selectGameSearchResults(state),
    currentPage: selectCurrentPage(state),
    resultsPerPage: selectGameResultsPerPage(state)
  };
};

const mapDispatchToProps = {
  changePage,
  changeResultsPerPage
};

const Component: React.FC<Props> = ({
  games,
  currentPage,
  resultsPerPage
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

  return (
    <Table>
      <TableBody>
        {
          games.map((gameResult: GameInfo) => {
            return (
              <TableRow key={ gameResult.id }>
                <TableCell>
                  <GameSummary
                    gameResult={ gameResult }
                  ></GameSummary>
                </TableCell>
              </TableRow>
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
  );
};

export const GameSearchResultsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
