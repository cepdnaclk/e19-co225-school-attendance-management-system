

import React, {  useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

export default function AddUser() {

    let navigate= useNavigate()
    const [user,setUser]=useState({
        username:"",
        id:"",
       
    })

    const{name,id}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/student")
    }


  return (
    
   <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add Student</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor="Name" className='form-label'>Name</label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter student name'
                    name="username"
                    value={name}
                    onChange={(e)=>onInputChange(e)}></input>
                    
                
            </div>            
            <div className='mb-3'>
                    <label htmlFor="Id" className='form-label'>Id</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter student id'
                        name="id"
                        value = {id}
                        onChange={(e)=>onInputChange(e)}/>
                        
                    
            </div>
            <button type='submit' className='btn btn-outline-primary'>
                Submit
            </button>
            
            <Link  className='btn btn-outline-danger mx-2' to="/student">
                Cancel
            </Link>
            </form>
           
    
        </div>
   </div> 
   </div>
  );
}

