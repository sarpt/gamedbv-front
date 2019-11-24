import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const inputPlaceholder = 'game name, description, id, etc.';
const inputLabel = 'Search query';
const shouldGetAllGamesLabel = 'Get all games';
export const shouldGetAllGamesControlName = 'shouldGetAllGames';
export const queryControlName = 'query';

type Props = {
  query: string,
  shouldGetAllGames: boolean,
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const GameSearchQuery: React.FC<Props> = ({
  query,
  shouldGetAllGames,
  onQueryChange
}) => {
  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            checked={ shouldGetAllGames }
            name={ shouldGetAllGamesControlName }
            onChange={ onQueryChange }
            value={ shouldGetAllGames }
          ></Checkbox>
        }
        label={ shouldGetAllGamesLabel }
      ></FormControlLabel>
      <TextField
        disabled={ shouldGetAllGames }
        name={ queryControlName }
        onChange={ onQueryChange }
        value={ query }
        placeholder={ inputPlaceholder }
        label={ inputLabel }
      ></TextField>
    </React.Fragment>
  );
};
