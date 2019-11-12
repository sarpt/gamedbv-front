import {
  createStyles,
  Theme,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles: ReturnType<typeof makeStyles> = makeStyles((theme: Theme) => {
  return createStyles({
    'upper-game-row': {
      'display': 'flex',
      'flex-direction': 'row'
    },
    'lower-game-row': {
      'display': 'flex',
      'flex-direction': 'row'
    },
  });
});
