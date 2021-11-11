import {IUser} from "../Store/types";
//Later we will import our action types
import {LOGIN_USER, ADD_USER} from '../Actions/ActionTypes';

let initialState:IUser = {
    userId: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    roleId: 0,
    email: ''   
};

type Action = {type: string, payload: IUser};

export const userReducer = (state: IUser = initialState, action:Action) => {

    switch(action.type){
        case LOGIN_USER:
            initialState = action.payload;
            console.log(action.payload);
            return {
                ...initialState
            }
        default:
            return state;
    }

}