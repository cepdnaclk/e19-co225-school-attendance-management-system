import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddStudent  from './Pages/AddStudent'
import MarkAttendance  from './Pages/MarkAttendance'
import Parent from './Pages/Parent'
import View from './Pages/ViewStatus'
//npm install react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "addstudent",
    element: <AddStudent/>,
  },
  {
    path: "markattendance",
    element: <MarkAttendance/>,
  },
  {
    path: "parent",
    element: <Parent/>,
  },
  {
    path: "viewstatus",
    element: <View/>,
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
