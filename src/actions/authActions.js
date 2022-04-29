import * as api from '../api';
import {AUTH} from '../constants/actionTypes';



export const signIn = (formData, history) => async (dispatch) => {
    try {
        // login user
        const { data } = await api.signIn(formData, history);
        // action creator for pass the data to the reducer
        dispatch({ type: AUTH, payload: data })
        history('/')
    } catch (err) {
        console.log(err)
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        //signUp the user
        const { data } = await api.signUp(formData,history);
        dispatch({ type: AUTH, payload: data })
        history('/')
    } catch (err) {
        console.log(err)

    }
}