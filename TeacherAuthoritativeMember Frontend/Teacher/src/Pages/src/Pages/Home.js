import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
//import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

    const [users,setUser]=useState([])
    const {id}=useParams;
    useEffect(()=>{
        loadUsers();
    },[])
    const  loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/stuusers")
        setUser(result.data);
    }
    const deleteUser= async (id)=>{
        await axios.delete(`http://localhost:8080/stuuser/${id}`)
        loadUsers();
    }
  return (
    
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead className="thead-dark">
                <tr>
                
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
                
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <tr>
                        
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>
                            
                            <Link className='btn btn-outline-primary mx-2' to={`/editstudent/${user.id}`}>Edit</Link>
                            <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Remove</Link>

                        </td>
                        </tr>
                    ))
                }
                
                
            </tbody>
        </table>

        
        </div>
    </div>
    
  )
}
