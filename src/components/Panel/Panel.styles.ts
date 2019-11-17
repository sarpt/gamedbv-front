import {
  createStyles,
  Theme,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles: ReturnType<typeof makeStyles> = makeStyles((theme: Theme) => {
  return createStyles({
    'panelPaper': {
      'margin-bottom': '10px',
      'padding': '1rem'
    },
    'header': {
      'display': 'flex',
      'flex-direction': 'row',
      'align-items': 'center'
    },
    'icon': {
      'flex-grow': '0',
      'flex-shrink': '0',
      'margin-right': '0.5rem',
      'display': 'flex'
    },
    'label': {
      'flex-grow': '1',
      'flex-shrink': '1'
    },
    'content': {
      'padding-top': '0.5rem',
      'overflow-wrap': 'break-word'
    }
  });
});
