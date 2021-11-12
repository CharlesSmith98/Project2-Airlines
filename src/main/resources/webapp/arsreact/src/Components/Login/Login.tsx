import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../../Actions/UserActions';
import {useHistory, Link} from 'react-router-dom';

export const Login:React.FC<any> = () => {

    //First we will pull in the application level state with useSelector
    const appState = useSelector<any, any>((state) => state);
    //Create the dispatcher to dispatch actions
    const dispatch = useDispatch();

    //We will setup useHistory to naviate using JS
    const history = useHistory();

    //Set up our component level state, that other components don't need to know about
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
        console.log(appState);
        if(appState.user.id > 0){
            history.push('/home');
        }
    }, [appState]);

    //Update the username or password state with whatever is typed in the fields
    const handleChange = (e:any) => {
        if(e.target.name === 'username'){
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    //We need a function to actually handle the login
    const login = async () => {
        await dispatch(
            loginUser({username, password})
        );
    }

    return (
        <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={handleChange} id="username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange} id="password"/>
                </div>

                
                <button type="submit" className="btn btn-primary btn-block" onClick={login}>Login</button>
                
            </form>
    );
  

}