
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { Button, TextField } from '@mui/material';

function Login() {
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
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Password"
                                />
                                <a href='#' className="forget-pwd mt-2">Forget Password?</a>
                                <div className='row mt-3'>
                                    <Button className='col-md-6 m-auto' variant="contained" onClick={() => {}}>Login</Button>
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
