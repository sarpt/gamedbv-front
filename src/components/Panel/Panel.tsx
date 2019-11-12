import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './Panel.styles';

type Props = {
  label: string,
  icon?: React.ReactNode
};
export const Panel: React.FC<Props> = ({ label, icon, children }) => {
  const styles = useStyles();

  return (
    <Paper className={ styles.panelPaper }>
      <div className={ styles.header }>
        {
          icon && (
            <div className={ styles.icon }>
              { icon }
            </div>
          )
        }
        <Typography variant="h5" className={ styles.label }>
          { label }
        </Typography>
      </div>
      <div className={ styles.content }>
        {
          children
        }
      </div>
    </Paper>
  );
};
