//This is the file where actual business logic will occur, including calls to the api
import axios from 'axios';
import { IUser } from '../Store/types';
import {ADD_USER, LOGIN_USER} from './ActionTypes';

interface UserReg {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    roleId: number,
    email: string   
}

interface UserLogin {
    username: string,
    password: string
}

export const createUser = (user:UserReg) => async (dispatch: any) => {
    let create: IUser;
    const res = await axios.post('http://localhost:8080/user/create', user);

    create = {
        userId: res.data.userId,
        username: res.data.username,
        password: res.data.password,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        roleId: res.data.roleId,
        email: res.data.email   
    }
    return dispatch({
        type: ADD_USER,
        payload: create
    });
}

export const loginUser = (user:UserLogin) => async (dispatch: any) => {
    let loggedIn: IUser;

    try{
        //1. Create a post request to the backend server to attempt to login the user
        const res = await axios.post('http://localhost:8080/user/signin', user);

        //2. Is to handle the logged in user, or reject the login attempt
        loggedIn = {
            userId: res.data.userId,
            username: res.data.username,
            password: res.data.password,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            roleId: res.data.roleId,
            email: res.data.email   
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    }
    catch(e){

        loggedIn = {
            userId: -1,
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            roleId: 0,
            email: ''   
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    }
}