import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import { withTheme } from '@material-ui/core/styles';

type props = {};

const ApplicationBar: React.FC<props> = () => {
    return (
        <React.Fragment>
            <AppBar elevation={ 1 }>
                <Toolbar>
                <IconButton color="inherit" edge="start" aria-label="menu">
                    <MenuIcon 
                    open={ false }
                    />
                </IconButton>
                <Typography variant="h5">
                    Wii & NGC Database Viewer
                </Typography>
                <Button color="inherit">Options</Button>
                </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </React.Fragment>
    );
};

export default withTheme(ApplicationBar);
