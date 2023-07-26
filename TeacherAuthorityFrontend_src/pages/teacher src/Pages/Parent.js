import React from 'react'
//import '../App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import {  useParams } from 'react-router-dom';
//import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Parent() {
  const [users,setUser]=useState([])
    const {id}=useParams;
    useEffect(()=>{
        loadUsers();
    },[])
    const  loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/allparent")
        setUser(result.data);
    }
    
  return (
    <body>
        <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead className="thead-dark">
                <tr>
                
                <th scope="col">StudentID</th>
                <th scope="col">Parent/Gurdian Email</th>
                <th scope="col">Parent/Gurdian Name</th>
                <th scope="col">Parent/Gurdian Mobile Number</th>
                
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <tr>
                        
                        <td>{user.stuid}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.mobile}</td>

                            

                        
                        </tr>
                    ))
                }
                
                
            </tbody>
        </table>

        
        </div>
    </div>

    </body>
  )
}
