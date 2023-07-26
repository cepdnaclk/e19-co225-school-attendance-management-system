import React from 'react';


import Navbar from './layout/NavBar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
         <Route exact path = "/" element = {<Home/>}/>
         <Route exact path = "/addUser" element = {<AddUser/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
