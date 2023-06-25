import { Route, Routes } from 'react-router-dom';


import Dashboard  from "../containers/Dashboard/Dashboard";
import Notifications from "../containers/Notifications/Notifications";
import Profile from "../containers/Profile/Profile";

function AppRoutes(){
    return( <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
    </Routes>

    )
}

export default AppRoutes;