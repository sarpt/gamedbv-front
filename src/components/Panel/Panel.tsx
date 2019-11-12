import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './Panel.styles';

type Props = {
    label: string
};
export const Panel: React.FC<Props> = ({ label, children }) => {
    const styles = useStyles();
    
    return (
        <Paper className={ styles.panelPaper }>
            <Typography variant="h5" className={ styles.label }>
                { label }
            </Typography>
            <div className={ styles.content }>
                {
                    children
                }
            </div>
        </Paper>
    );
};
