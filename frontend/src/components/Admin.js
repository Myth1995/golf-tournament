
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Button, TextField, Chip, Box, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';  
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

function Admin() {
    const [flag, setFlag] = useState(true);
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        if(window.localStorage.user_name === "") {
            window.location.href = "/";
        }
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
            alert("Add tournament success!");
        })
        .catch((err)=>{

        });
    }

    return (
        <section className='admin' id="admin">
            <div className='container m-auto'>
                <div className='d-flex admin-nav'>
                    <ul>
                        {/* <li onClick={ ()=>{
                            setFlag(false);
                        } }>Register Tournament</li> */}
                        <li onClick={ ()=>{
                            setFlag(true);
                        } }>Player List</li>
                    </ul>
                </div>
                <div className='col-md-8 center'>
                    <table className='user-list mt-5'/* style={{display: flag ? "block" : "none" }}*/>
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
                </div>
            </div>
        </section>
    );
}

export default Admin;
