import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { AppState } from '../../store/store';
import { selectSearchQuery, selectShouldGetAllGames } from '../../store/selectors/gameSearchSelectors';
import { changeSearchQuery } from '../../store/actions/gameSearchActions';
import { connect } from 'react-redux';

const inputPlaceholder = 'game name, description, id, etc.';
const inputLabel = 'Search query';
const shouldGetAllGamesLabel = 'Get all games';

const mapStateToProps = (state: AppState) => {
  return {
    searchQuery: selectSearchQuery(state),
    shouldGetAllGames: selectShouldGetAllGames(state)
  };
};

const mapDispatchToProps = {
  changeSearchQuery
};

type additionalProps = {};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const GameSearchQuery: React.FC<Props> = ({
  searchQuery,
  shouldGetAllGames,
  changeSearchQuery
}) => {
  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value; 
    changeSearchQuery({ searchQuery: newSearchQuery, shouldGetAllGames });
  };

  const onShouldGetAllGamesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newShouldGetAllgames = event.target.checked; 
    changeSearchQuery({ searchQuery, shouldGetAllGames: newShouldGetAllgames });
  };

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            checked={ shouldGetAllGames }
            onChange={ onShouldGetAllGamesChange }
            value={ shouldGetAllGames }
          ></Checkbox>
        }
        label={ shouldGetAllGamesLabel }
      ></FormControlLabel>
      <TextField
        disabled={ shouldGetAllGames }
        onChange={ onQueryChange }
        value={ searchQuery }
        placeholder={ inputPlaceholder }
        label={ inputLabel }
      ></TextField>
    </React.Fragment>
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearchQuery);