import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../../src/Pages/Dashboard/AllUsers/AllUsers";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/Dashboard/AddDoctor/AddDoctor";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUP from "../../Pages/SignUP/SignUP";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError/>,
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
        errorElement: <DisplayError/>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment/>

            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers/></AdminRoute>

            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute><AddDoctor/></AdminRoute>

            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute><ManageDoctors/></AdminRoute>

            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)

            },
            
        ]
    }
])