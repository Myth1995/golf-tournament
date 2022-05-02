
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Button, TextField, Chip, Box, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';  
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

function Register() {
    useEffect(()=>{
        if(window.localStorage.user_name === "") {
            window.location.href = "/";
        }
    }, []);

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("10:00");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        // if(registerGame === "" || score === "" || clubName === "" || totalPlayers === "" ) {
        //     alert("Please input all informations!");
        //     return;
        // }
        let data = {
            register_game: formData.get('registerGame'),
            score: formData.get('score'),
            club_name: formData.get('clubName'),
            total_players: formData.get('totalPlayers'),
            date: date.toLocaleDateString(),
            time: formData.get('time')
        }
        console.log(data);

        axios.post(serverUrl + "/add-tour", data)
        .then((res)=>{
            window.location.href = "/profile"

        })
        .catch((err)=>{

        });
    }

    return (
        <section className='register' id="register">
            <div className='container'>
                <div className='col-md-6 center mt-5 m-auto'>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2} sx={{mx: "auto"}}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Registered Game"
                                    name="registerGame"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Total Players"
                                    name="totalPlayers"
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Club Name"
                                    name="clubName"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Score Format"
                                    className='mb-3'
                                    name="score"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{display: "flex"}}>
                                <Chip label="Play Date" />
                                <DatePicker selected={date} onChange={(d) => {setDate(d);}} dateFormat="MM/dd/yyyy"/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{display: "flex"}}>
                                <Chip label="Play Time" />
                                <TimePicker value={time} onChange={(t) => {setTime(t);}} />
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{mx: "auto", display: "flex"}}>
                                <Button type="submit" sx={{mx: "auto"}} variant="contained" color="success">Register</Button>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default Register;
