
import * as React from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { serverUrl } from '../common';

function Profile() {
    const userName = window.localStorage.user_name;
    const hpNum = window.localStorage.hp_num;
    const email = window.localStorage.email;

    const [tourList, setTourList] = React.useState([]);
    React.useEffect(()=>{
        if(window.localStorage.user_name === "") {
            window.location.href = "/";
        }
        async function getUsers() {
            await axios.get(serverUrl + "/get-tours")
            .then((res)=>{
                setTourList(res.data);
            })
        }
        getUsers();
    }, []);

    return (
        <section className='profile' id="profile">
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-8 mt-5 m-auto'>
                        <div className='row col-md-4 mt-5 m-auto'>
                            <TextField
                                id="outlined-required"
                                label="UserName"
                                className='mb-3'
                                value={userName}
                                readOnly
                            />
                            <TextField
                                id="outlined-hpnum-input"
                                label="HP Num"
                                className='mb-3'
                                value={hpNum}
                                readOnly
                            />
                            <TextField
                                id="outlined-email-input"
                                type="email"
                                label="Email Id"
                                className='mb-3'
                                value={email}
                                readOnly
                            />
                        </div>
                        <div className='row mt-3'>
                            <span className='scoreboard'>Scoreboard</span>
                            <table>
                                <thead>
                                    <th>No</th>
                                    <th>Registered Game</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Score</th>
                                    <th>Status</th>
                                </thead>
                                <tbody>
                                    {
                                        tourList.map((tour, index) =>(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{tour.register_game}</td>
                                                <td>{tour.date}</td>
                                                <td>{tour.time}</td>
                                                <td><a href="/leaderboard">Leaderboard</a></td>
                                                <td></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
