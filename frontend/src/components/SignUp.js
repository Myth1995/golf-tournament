
import * as React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';  
import { serverUrl } from '../common';   
import "react-datepicker/dist/react-datepicker.css";  

import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Chip, MenuItem} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

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

function SignUp() {
    const [birthDate, setBirthDate] = React.useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let formData = {
          email: data.get('email'),
          password: data.get('password'),
          first_name: data.get('firstName'),
          last_name: data.get('lastName'),
          user_name: data.get('userName'),
          hp_num: data.get('hpNum'),
          age: data.get('age'),
          player_id: data.get('playerID'),
          gender: data.get('gender'),
          birth_date: birthDate.toLocaleDateString()
        };
        
        if(formData.first_name===""||formData.last_name===""||formData.user_name===""||formData.password===""||formData.player_id===""||formData.hp_num===""||formData.age===""||formData.gender===""||formData.email==="") {
            alert("Please fill all informations!");
            return;
        }

        axios.post(serverUrl + '/add-user', formData)
        .then((res)=>{
            if(res.status === 200) {
                window.localStorage.user_name = formData.user_name;
                window.localStorage.hp_num = formData.hp_num;
                window.localStorage.email = formData.email;
                window.location.href = "/profile"
            }
        })
        .catch((err)=>{

        });
      };

    return (
        <section className='signup' id="signup">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="User Name"
                                        name="userName"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-playerid-input"
                                        label="Player Id"
                                        name="playerID"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-hpnum-input"
                                        label="HP Num"
                                        name="hpNum"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-age-input"
                                        type="number"
                                        label="Age"
                                        name="age"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Select"
                                    name="gender"
                                    helperText="Please select your gender"
                                    >
                                    {genderInfo.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Chip label="Birth Date" /><DatePicker name="birthDate" selected={birthDate} onChange={(date) => {setBirthDate(date);}} dateFormat="MM/dd/yyyy"/>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/" variant="body2">
                                    Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </section>
    );
}

export default SignUp;