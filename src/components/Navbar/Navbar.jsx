import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import memories from '../../images/memories.png';
import useStyles from './styles';

export default function Navbar() {
    const classes = useStyles();
    let user = null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >
                    My Navbar
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" width="100" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h2" align="center" >{user.result.name}</Typography>
                        <Button className={classes.logout} variant='contained' color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button variant='contained' color="primary" component={Link} to='/auth'>Login</Button>

                )}
            </Toolbar>
        </AppBar>
    )
}