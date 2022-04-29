import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Avatar, Container, Paper, Typography, Button, Icon } from '@material-ui/core';

import { signIn, signUp } from '../../actions/authActions';
import { GoogleLogin } from 'react-google-login'
import InputComponent from './Input';
import icon from './Icon';
import useStyles from './style';

const initialState = {firstName : '', lastName:'', email: '', password:'', confirmPassword:''}

export default function Auth() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [showPassword, setShowPassword] = useState('')
    const [formData, setFormdata] = useState(initialState)
    const [isSignUp, setIssignup] = useState(false)
    const classes = useStyles();

    const OnSubmitClick = (e) => {
         e.preventDefault();

         if(isSignUp){
              dispatch(signUp(formData, history))
         }else{
            dispatch(signIn(formData, history))
         }
        console.log("formData",formData)
    }
    const handleChange = (e) => {
        // ****** only change one specific property *****
        setFormdata({...formData, [e.target.name]:e.target.value})
    }
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }
    const switchMode = () => {
        setIssignup((oldState) => !oldState);
        setShowPassword(false);
    }
    // const googleSuccess = (resp) => {
    //   console.log(resp)
    // }
    // const googleFailure = () => {
    //     alert('Google sign in failed')
    // }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={OnSubmitClick}>
                    <Grid >
                    {isSignUp && <>
                        <InputComponent name="firstName"
                            label="First Name"
                            half
                            type="text"
                            autoFocus
                            handleChange={handleChange}
                        />
                        <InputComponent name="lastName"
                            label="Last Name"
                            half
                            type="text"
                            handleChange={handleChange}
                        />
                    </>}

                    <InputComponent name="email"
                        label="Email"
                        half
                        type="text"
                        handleChange={handleChange}
                    />
                    <InputComponent name="password"
                        label="Password"
                        half
                        type={showPassword ? "text" : "password"}
                        handleChange={handleChange}
                        handleShowPassword={handleShowPassword}
                    />
                    {isSignUp && <InputComponent 
                        name="confirmPassword"
                        type='password'
                        label='Confirm Password'
                        half
                        handleChange={handleChange}
                    />}
                    </Grid>
                    {/* <GoogleLogin
                        clientId="Google Id"
                        buttonText="Login"
                        render={(props) => (
                            <Button className={classes.googleButton} color='primary'
                                variant='contained'
                                startIcon={<Icon />}
                                fullWidth onClick={props.onClick}
                                disabled={props.disabled}>Google signIn</Button>
                        )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy={'single_host_origin'}
                    />, */}
                    <Button type='submit' variant='contained' color="primary" className={classes.submit}>{isSignUp ? 'SignUp' : 'SignIn'}</Button>
                    <Grid justifyContent='center'>
                        <Button variant='contained' onClick={switchMode}>{isSignUp ? 'Sign Up if not registred' : 'Sign In if already have an account'}</Button>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
