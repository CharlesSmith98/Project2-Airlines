import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { AppState } from '../Interfaces/IUser';

//We will create this in a second
import reducer from '../Reducers';



const initialState:AppState = {
    user: {
        id: 0,
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        roleid: 0,
        email: ''   
    },
}

const middleWare = [thunk];

export const store = createStore(reducer, initialState, applyMiddleware(...middleWare));