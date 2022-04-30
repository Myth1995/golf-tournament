
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Button, TextField } from '@mui/material';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const onLogin = () => {
        let data = {
            email: email,
            password: password
        }

        axios.post(serverUrl + "/login", data)
        .then((res)=>{

        })
        .catch((err)=>{

        });
    }

    return (
        <section className='login' id="login">
            <div className='m-container'>                
                <div className='container main'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-8 center mt-5 m-auto'>
                            <div className='input-fields mt-5'>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    className='mb-3'
                                    value={email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Password"
                                    value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                />
                                <a href='/' className="forget-pwd mt-2">Forget Password?</a>
                                <div className='row mt-3'>
                                    <Button className='col-md-6 m-auto' variant="contained" onClick={() => { onLogin(); }}>Login</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
