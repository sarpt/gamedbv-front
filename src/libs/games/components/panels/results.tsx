import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ViewListIcon from '@material-ui/icons/ViewList';

import { Panel } from '../../../common/components/panel';
import { GameSearchResultsTable } from '../tables/results';

import {
  fetchSearchResults,
} from '../../actions/search';
import { AppState } from '../../../core/store/store';
import { areAnyGameSearchResultsAvailable } from '../../selectors/results';

const searchResultsLabel = 'Search results';
const noGameSearchResultMessage = 'No games with provided query were found';

const mapStateToProps = (state: AppState) => {
  return {
    shouldShowSearchResultsTable: areAnyGameSearchResultsAvailable(state),
  };
};

const mapDispatchToProps = {
  dispatchFetchSearchResults: fetchSearchResults,
};

type AdditionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & AdditionalProps;

const Component: React.FC<Props> = ({
  shouldShowSearchResultsTable,
  dispatchFetchSearchResults,
}) => {
  useEffect(() => {
    dispatchFetchSearchResults();
  }, [dispatchFetchSearchResults]);

  return (
    <Panel
      label={ searchResultsLabel }
      icon={ <ViewListIcon /> }
    >
      {
        shouldShowSearchResultsTable ? (
          <GameSearchResultsTable></GameSearchResultsTable>
        ) : (
          <div>
            { noGameSearchResultMessage }
          </div>
        )
      }
    </Panel>
  );
};

export const GameSearchResultsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
