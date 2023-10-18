import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import AppointmentPage from "../../AppointmentPage/AppointmentPage/AppointmentPage/AppointmentPage";

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children:[
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/appointment',
            element: <AppointmentPage></AppointmentPage>
        }
       ]
    }
])

export default router;