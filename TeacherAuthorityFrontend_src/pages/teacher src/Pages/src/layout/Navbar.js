import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Student</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className='btn btn-outline-dark' to ="/addstudent">Add Student</Link>
        <span style={{ display: 'inline-block', width: '10px' }}></span> 
        <Link className='btn btn-outline-dark' to ="/">Back</Link>
        <span style={{ display: 'inline-block', width: '1000px' }}></span> 
        <button className='btn btn-outline-success'>Submit</button>

        {/*<button className="btn btn-outline-success my-2 my-sm-0 ml-auto">Submit</button>*/}
        
        
        </nav>
    </div>
  )
}
