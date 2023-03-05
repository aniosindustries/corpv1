import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import UserContext from '../context/UserContext';
import axios from 'axios';
import domain from '../util/domain';

function UpwardLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const {getUser} = useContext(UserContext);
    
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }
        await axios.post(`${domain}/auth/login`, user);
        await getUser();
        navigate('/upward');
    }
    return(
       
        <div className='upward-form'>
            <div>
                    <p className='login-contact'>To create a login for Project Upward, please <a href='/Contact' style={{color: 'white'}}>contact us</a>. Otherwise,</p>
                        <form onSubmit={login}>
                            <h3 className="login-contact" >Please sign in</h3>
                            <div className="form-floating">
                            <input type="text" className="form-control" value={username} id='form-username' onChange={(e) => setUsername(e.target.value)}/>
                            <label htmlFor='form-username'>Username</label>
                            </div>
                            <div className="form-floating">
                            <input type="password" className="form-control" value={password} id='form-password' onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor='form-password'>Password</label>
                            </div>

                            <div className="checkbox mb-3">
                            {/* <label>
                            <input type="checkbox" value="remember-me"/> I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
                            </label> */}
                            </div>
                            <button className="w-100 btn btn-success" type="submit">Sign in</button>
                        </form>
                    </div>
        </div>
    )
}


export default UpwardLogin;