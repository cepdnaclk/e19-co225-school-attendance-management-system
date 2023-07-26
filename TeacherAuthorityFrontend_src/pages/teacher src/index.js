import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import AddStudent  from './Pages/AddStudent'
import MarkAttendance  from './Pages/MarkAttendance'
import AddStudent  from './Pages/src/App'
import Parent from './Pages/ParentApp'
import View from './Pages/ViewStatus'
import AddUser from './Pages/src/users/AddUser';
import EditUser from './Pages/src/users/EditUser';
import MarkAtt from './Pages/MarkAttSrc/App';

//npm install react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotificationApp from './Pages/NotificationApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/student",
    element: <AddStudent/>,
  },
  {
    path: "parent",
    element: <Parent/>,
  },
  {
    path: "viewstatus",
    element: <View/>,
  },{
    path:"/addstudent",
    element:<AddUser/>,
  },{
    path:"/editstudent/:id",
    element:<EditUser/>,
  },{
    path:"/notificationpage",
    element:<NotificationApp />,
  },{
    path: "/markattendance",
    element:<MarkAtt />
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
