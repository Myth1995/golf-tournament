
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, TextField } from '@mui/material';

function Admin() {

    const [flag, setFlag] = useState(true);
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        async function getUsers() {
            await axios.get("http://localhost:4000/get-users")
            .then((res)=>{
                setUserList(res.data);
            })
            console.log(userList);
        }
        getUsers();
    }, []);

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
                    <div className='user-list mt-5'>
                        <table style={{display: flag ? "block" : "none" }}>
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
                                    userList.map((user)=>(
                                        <tr>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.user_name}</td>
                                            <td>{user.player_id}</td>
                                            <td>{user.hp_num}</td>
                                            <td>{}</td>
                                            <td>{user.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='row mt-3'>
                            <Button className='col-md-4 m-auto' variant="contained" color="error" onClick={() => {}}>Back</Button>
                            <Button className='col-md-4 m-auto' variant="contained" color="success" onClick={() => {}}>Register</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admin;
