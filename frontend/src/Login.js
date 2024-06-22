import React, { useState } from "react";
import axios from 'axios';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit= async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login',{ 
                email, password
            });
            console.log(response.data); //Handle success with a redirection to another page.
        } catch (error) {
            console.log('Login failed', error);
        }
    };

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="text"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;