import {
  createStyles,
  Theme,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles: ReturnType<typeof makeStyles> = makeStyles((theme: Theme) => {
    return createStyles({
        'panelPaper': {
            'margin-bottom': '10px',
            'padding': '1em'
        },
        'label': {
        },
        'content': {
            'padding-top': '0.5em'
        }
    });
});
