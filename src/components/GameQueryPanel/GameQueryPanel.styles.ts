import {
  createStyles,
  Theme,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles: ReturnType<typeof makeStyles> = makeStyles((theme: Theme) => {
    return createStyles({
        'row': {
            'display': 'flex',
            'flex-direction': 'row'
        }
    });
});
