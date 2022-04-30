
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Button, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';  
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

function Admin() {

    const [flag, setFlag] = useState(true);
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        async function getUsers() {
            await axios.get(serverUrl + "/get-users")
            .then((res)=>{
                setUserList(res.data);
            })
            console.log(userList);
        }
        getUsers();
    }, []);

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("10:00");
    const [registerGame, setRegisterGame] = useState("");
    const [score, setScore] = useState("");
    const [clubName, setClubName] = useState("");
    const [totalPlayers, setTotalPlayers] = useState("");

    const onTourRegister = () => {
        let data = {
            register_game: registerGame,
            score: score,
            club_name: clubName,
            total_players: totalPlayers,
            date: date,
            time: time
        }

        axios.post(serverUrl + "/add-tour", data)
        .then((res)=>{
            alert("Add tournament success!");
        })
        .catch((err)=>{

        });
    }

    return (
        <section className='admin' id="admin">
            <div className='container m-auto'>
                <div className='d-flex admin-nav'>
                    <ul className=''>
                        <li onClick={ ()=>{
                            setFlag(false);
                        } }>Tournaments</li>
                        <li onClick={ ()=>{
                            setFlag(true);
                        } }>Players</li>
                    </ul>
                </div>
                <div className='col-md-8 center mt-5 m-auto'>
                    <table className='user-list mt-5' style={{display: flag ? "block" : "none" }}>
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Player ID</th>
                            <th>H/P Num</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </thead>
                        <tbody>
                            {
                                userList.map((user, index)=>(
                                    <tr key={index}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.user_name}</td>
                                        <td>{user.player_id}</td>
                                        <td>{user.hp_num}</td>
                                        <td>{user.birth_date}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className="tournament mt-5" style={{display: !flag ? "block" : "none "}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Registered Game"
                            className='mb-3 m-auto'
                            value={registerGame}
                            onChange={(e)=>{
                                setRegisterGame(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Total Players"
                            className='mb-3'
                            value={totalPlayers}
                            onChange={(e)=>{
                                setTotalPlayers(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Club Name"
                            className='mb-3'
                            value={clubName}
                            onChange={(e)=>{
                                setClubName(e.target.value);
                            }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Score"
                            className='mb-3'
                            value={score}
                            onChange={(e)=>{
                                setScore(e.target.value);
                            }}
                        />

                        <DatePicker selected={date} onChange={(d) => {setDate(d);}} dateFormat="MM/dd/yyyy"/>

                        <TimePicker value={time} onChange={(t) => {setTime(t);}} dateFormat="MM/dd/yyyy"/>
                    </div>
                    <div className='row mt-3'>
                        <Button className='col-md-3 m-auto' variant="contained" color="error" onClick={() => {}}>Back</Button>
                        <Button className='col-md-3 m-auto' variant="contained" color="success" style={{display: !flag ? "block" : "none"}} onClick={() => { onTourRegister(); }}>Register</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admin;
