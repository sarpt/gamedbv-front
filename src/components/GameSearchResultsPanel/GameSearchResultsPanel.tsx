import React from 'react';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import ViewListIcon from '@material-ui/icons/ViewList';

import { GameResult } from '../../models/GameResult';

import { Panel } from '../Panel/Panel';
import { GameResultRow } from '../GameResultRow/GameResultRow';

const searchResultsLabel = 'Search results';

export type PaginationChanges = {
  page: number,
  resultsPerPage: number
};

type props = {
  page: number,
  resultsPerPage: number,
  results: GameResult[],
  isSearchQueryProvided: boolean,
  onPaginationChange: (changes: PaginationChanges) => any
};
export const GameSearchResultsPanel: React.FC<props> = ({
  page,
  resultsPerPage,
  results,
  isSearchQueryProvided,
  onPaginationChange
}) => {
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPaginationChange({
      page: 0,
      resultsPerPage: Number.parseInt(event.target.value, 10)
    });
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onPaginationChange({
      page: newPage,
      resultsPerPage
    });
  }

  const NO_GAME_SEARCH_RESULT = 'No games with provided query were found';
  const NO_QUERY_PROVIDED = 'No search query provided';

  return (
    <Panel
      label={ searchResultsLabel }
      icon={ <ViewListIcon /> }
    >
      {
        results.length !== 0 ? (
          <Table>
            <TableBody>
              {
                results.map((gameResult: GameResult) => {
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
                  count={ results.length }
                  onChangePage={ handleChangePage }
                  onChangeRowsPerPage={ handleChangeRowsPerPage }
                  page={ page }
                  rowsPerPage={ resultsPerPage }
                ></TablePagination>
              </TableRow>
            </TableFooter>
          </Table>
        ) : (
          <div>
            { isSearchQueryProvided ? NO_GAME_SEARCH_RESULT : NO_QUERY_PROVIDED }
          </div>
        )
      }
    </Panel>
  );
};
