import {
  createStyles,
  Theme,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles: ReturnType<typeof makeStyles> = makeStyles((theme: Theme) => {
    return createStyles({
        'main': {
            'min-height': '100vh',
            'background-color': theme.palette.background.paper,
            'overflow-x': 'scroll'
        }
    });
});
