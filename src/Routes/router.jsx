import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Layouts/DashBoard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../DashBoard/Students/MyClasses";
import Payments from "../DashBoard/Students/Payments/Payments";
import EnrollClasses from "../DashBoard/Students/EnrollClasses/EnrollClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader:() => fetch("http://localhost:5000/classes")

      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:"/dashboard/myclass",
        element:<MyClasses></MyClasses>
      },
      {
        path:"/dashboard/payment",
        element:<Payments></Payments>
      },
      {
        path:"/dashboard/enrollClasses",
        element:<EnrollClasses></EnrollClasses>
      }
    ]
  }
]);

export default router;
