import { useState, useEffect } from 'react';

import URL from './URL';


const TOKEN_STORAGE_KEY = 'strangers_token';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = ("");

    useEffect(() => {
        const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);

        setToken(storageToken);
    }, []);

    const setTargetValue = (placeholder) => {
        return (event) => {
            placeholder(event.target.value);
        }
    };

    if (!token) {
        return (
            <div className='signUp'>
                <form onSubmit={
                    async (event) => {
                        event.preventDefault();
                        
                        
                        // finish with a try catch
                    }
                  }
                >
                    <div>
                        <label>Username:</label>
                        <input 
                        OnChange={setUsername}
                        Value={username}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                        OnChange={setPassword}
                        value={password}
                        type={'password'}
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SignUp();
