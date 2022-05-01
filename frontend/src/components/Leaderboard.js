import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';

function Leaderboard() {
    const [dataList, setDataList] = useState([]);
    useEffect(()=>{
        if(window.localStorage.user_name === "") {
            window.location.href = "/";
        }
        async function getDatas() {
            await axios.get(serverUrl + "/get-leaderboard")
            .then((res)=>{
                setDataList(res.data);
            })
        }
        getDatas();
    }, []);

    return (
        <section className='admin' id="admin">
            <div className='container'>
                <div className='col-md-8 m-auto'>
                    <table className='user-list mt-5'>
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
                                dataList.map((user, index)=>(
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

export default Leaderboard;
