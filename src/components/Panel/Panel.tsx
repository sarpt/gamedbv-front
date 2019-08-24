import React from 'react';

import Typography from '@material-ui/core/Typography';

type Props = {
    label: string
};
export const Panel: React.FC<Props> = ({ label, children }) => {
    return (
        <div>
            <Typography variant="h5">
                { label }
            </Typography>
            <div>
                {
                    children
                }
            </div>
        </div>
    );
};
