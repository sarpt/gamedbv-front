import React from 'react';
import { connect } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PanelSection } from '../PanelSection/PanelSection';

import { QueryInput, QueryInputContainer } from './GameSearchQuery.styles';
import { AppState } from '../../store/store';
import { selectSearchQuery, selectShouldFilterByText } from '../../store/selectors/gameSearchSelectors';
import { changeSearchQuery } from '../../store/actions/gameSearchActions';

const inputPlaceholder = 'game name, description, id, etc.';
const inputLabel = 'Text filter';
const shouldFilterByTextLabel = 'Filter results by text query';
const queryLabel = 'Query';

const mapStateToProps = (state: AppState) => {
  return {
    searchQuery: selectSearchQuery(state),
    shouldFilterByText: selectShouldFilterByText(state),
  };
};

const mapDispatchToProps = {
  dispatchChangeSearchQuery: changeSearchQuery,
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<Props> = ({
  searchQuery,
  shouldFilterByText,
  dispatchChangeSearchQuery,
}) => {
  const onQueryChange = (newSearchQuery: string) => {
    dispatchChangeSearchQuery({ searchQuery: newSearchQuery, shouldGetAllGames: shouldFilterByText });
  };

  const onShouldGetAllGamesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newShouldGetAllgames = event.target.checked;
    dispatchChangeSearchQuery({ searchQuery, shouldGetAllGames: newShouldGetAllgames });
  };

  return (
    <PanelSection label={ queryLabel }>
      <QueryInputContainer>
        <QueryInput
          disabled={ !shouldFilterByText }
          onChange={ onQueryChange }
          initialValue={ searchQuery }
          placeholder={ inputPlaceholder }
          label={ inputLabel }
        ></QueryInput>
      </QueryInputContainer>
      <FormControlLabel
        control={
          <Checkbox
            checked={ shouldFilterByText }
            onChange={ onShouldGetAllGamesChange }
            value={ shouldFilterByText }
          ></Checkbox>
        }
        label={ shouldFilterByTextLabel }
      ></FormControlLabel>
    </PanelSection>
  );
};


export const GameSearchQuery = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
