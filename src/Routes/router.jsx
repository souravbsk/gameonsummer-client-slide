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
import ManageUsers from "../DashBoard/Admins/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AddAClass from "../DashBoard/Instructor/AddAClass/AddAClass";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../DashBoard/Admins/ManageClasses/ManageClasses";
import InstructorClassesList from "../DashBoard/Instructor/InstructorClassesList/InstructorClassesList";
import StudentRoute from "./StudentRoute";
import PaymentHistory from "../DashBoard/Students/PaymentHistory/PaymentHistory";

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
        element:<StudentRoute><MyClasses></MyClasses></StudentRoute>
      },
      {
        path:"/dashboard/payment/:id",
        element:<StudentRoute><Payments></Payments></StudentRoute>
      },
      {
        path:"/dashboard/enrollClasses",
        element:<StudentRoute><EnrollClasses></EnrollClasses></StudentRoute>
      },
      {
        path:"/dashboard/paymenthistory",
        element:<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
      },
      // ________ admin route___________
      {
        path:"/dashboard/manageusers",
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path:"/dashboard/manageclasses",
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      //_____________Instructor__________
      {
        path:"/dashboard/addaclass",
        element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute>
      },{
        path:"/dashboard/myClassList",
        element:<InstructorRoute><InstructorClassesList></InstructorClassesList></InstructorRoute>
      }
    ]
  }
]);

export default router;
