import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';

function Admin() {
    // const [flag, setFlag] = useState(true);
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

    return (
        <section className='admin' id="admin">
            <div className='container m-auto'>
                <div className='d-flex admin-nav'>
                    <ul>
                        <li onClick={ ()=>{
                            // setFlag(true);
                        } }>Player List</li>
                        <li onClick={ ()=>{
                            window.location.href = "/register";
                            // setFlag(false);
                        } }>Tournament</li>
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
