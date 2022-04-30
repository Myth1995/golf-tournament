
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button, TextField, MenuItem } from '@mui/material';
import DatePicker from 'react-datepicker';  
import { serverUrl } from '../common';   
import "react-datepicker/dist/react-datepicker.css";  

const genderInfo = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    }
  ];

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [playerID, setPlayerID] = useState("");
    const [hpNum, setHpNum] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const onRegister = () => {
        let data = {
            first_name: firstName,
            last_name: lastName,
            user_name: userName,
            password: password,
            player_id: playerID,
            hp_num: hpNum,
            age: age,
            gender: gender,
            email: email
        }
        axios.post(serverUrl + '/add-user', data)
        .then((res)=>{
            if(res.status === 200) {
                alert("success");
                return;
            }
        })
        .catch((err)=>{

        });
    }
    return (
        <section className='register' id="register">
            <div className='m-container'>
                <div className='container main'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-8 mt-5 m-auto'>
                            <div className='row mt-5 m-auto'>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    className='mb-3 m-auto'
                                    value={firstName}
                                    onChange={(e)=>{
                                        setFirstName(e.target.value);
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    className='mb-3'
                                    value={lastName}
                                    onChange={(e)=>{
                                        setLastName(e.target.value);
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="UserName"
                                    className='mb-3'
                                    value={userName}
                                    onChange={(e)=>{
                                        setUserName(e.target.value);
                                    }}
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    className='mb-3'
                                    value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                />

                                <TextField
                                    id="outlined-playerid-input"
                                    label="Player Id"
                                    className='mb-3'
                                    value={playerID}
                                    onChange={(e)=>{
                                        setPlayerID(e.target.value);
                                    }}
                                />

                                <TextField
                                    id="outlined-hpnum-input"
                                    label="HP Num"
                                    className='mb-3'
                                    value={hpNum}
                                    onChange={(e)=>{
                                        setHpNum(e.target.value);
                                    }}
                                />

                                {/* <DatePicker  
                                    selected={ birthDate }  
                                    onChange={ () => {handleChange(); }}
                                    name="birthDate"  
                                    dateFormat="MM/dd/yyyy"  
                                />   */}

                                <TextField
                                    id="outlined-age-input"
                                    type="number"
                                    label="Age"
                                    className='mb-3'
                                    value={age}
                                    onChange={(e)=>{
                                        setAge(e.target.value);
                                    }}
                                />
                                <TextField
                                    id="outlined-select-currency"
                                    className='mb-3'
                                    select
                                    label="Gender"
                                    value={gender}
                                    onChange={(e)=>{
                                        setGender(e.target.value);
                                    }}
                                    >
                                    {genderInfo.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-email-input"
                                    type="email"
                                    label="Email Id"
                                    className='mb-3'
                                    value={email}
                                    onChange = {(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                />
                                <div className='row mt-3'>
                                    <Button className='col-md-4 m-auto' variant="contained" onClick={() => {
                                        window.location.href = "/"
                                    }}>Back</Button>
                                    <Button className='col-md-4 m-auto' variant="contained" onClick={() => onRegister()}>Register</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
