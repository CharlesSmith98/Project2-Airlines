import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

//We will create this in a second
import reducer from '../Reducers';

import {AppState} from './types';

const initialState:AppState = {
    user: {
        userId: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        roleId: 0,
        email: ''   
    },
}

const middleWare = [thunk];

export const store = createStore(reducer, initialState, applyMiddleware(...middleWare));