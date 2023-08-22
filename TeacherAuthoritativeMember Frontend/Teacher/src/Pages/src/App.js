
//import './App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from "./Pages/Home";
import AddUser from './users/AddUser';
//C:\Users\user\Documents\AA4th semi\CO225- Software Construction\project\teacher\teacherfrontend\src\Pages\src\users
import EditUser from './users/EditUser';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addstudent" element={<AddUser/>}/>
          <Route exact path="/editstudent/:id" element={<EditUser/>}/>

        </Routes>
        

      
      
    </div>
  );
}

export default App;
