import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../../src/Pages/Dashboard/AllUsers/AllUsers";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUP from "../../Pages/SignUP/SignUP";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUP/>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout/></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment/>

            },
            {
                path: '/dashboard/users',
                element: <AllUsers/>

            },
            
        ]
    }
])