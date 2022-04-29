import React from 'react'
import { TextField, IconButton, InputAdornment, Grid, Button } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({name, label,autoFocus, type, half, handleChange, handleShowPassword}) => {
    return (
        <div>
            <Grid container spacing={2} xs={12} sm = {half ? 12 : 12} style={{marginTop:'15px'}} >
                <TextField name={name} 
                variant="outlined" 
                label={label} 
                fullWidth
                type={type}
                autoFocus ={autoFocus}
                onChange={handleChange} 
                inputProps= {name =='password' ? {
                    endadornment: (
                    <InputAdornment position='end'>
                    <Button onClick={handleShowPassword}>{type=='password'?<Visibility/> : <VisibilityOff />}</Button>
                    </InputAdornment>)
                }: ''}
                />
            </Grid>

        </div>
    )
}

export default Input
