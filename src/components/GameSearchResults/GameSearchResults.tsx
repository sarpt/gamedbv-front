import React from 'react';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

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
    onPaginationChange: (changes: PaginationChanges) => any 
};
export const GameSearchResults: React.FC<props> = ({
    page,
    resultsPerPage,
    results,
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

    return (
        <Panel
            label={ searchResultsLabel }
        >
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
        </Panel>
    );
};
