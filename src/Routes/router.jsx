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
import ReviewClasses from "../DashBoard/Admins/ReviewClasses/ReviewClasses";
import NotFound from "../Pages/NotFound/NotFound";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorsClasses from "../Shared/InstructorsClasses/InstructorsClasses";
import AdminHome from "../DashBoard/Admins/AdminHome/AdminHome";
import StudentHome from "../DashBoard/Students/StudentHome/StudentHome";
import InstructorHome from "../DashBoard/Instructor/InstructorHome/InstructorHome";
import StudentProfile from "../DashBoard/Students/StudentProfile/StudentProfile";
import InstructorProfile from "../DashBoard/Instructor/InstructorProfile/InstructorProfile";
import AdminProfile from "../DashBoard/Admins/AdminProfile/AdminProfile";

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
        loader:() => fetch("https://summer-camp-server-one.vercel.app/classes")

      },
      {
        path:"/instructors",
        element:<Instructors></Instructors>,
        loader: () => fetch("https://summer-camp-server-one.vercel.app/Instructors")
      },
      {
        path:"/instructorsClasses/:id",
        element:<InstructorsClasses></InstructorsClasses>,
        loader: ({params}) => fetch(`https://summer-camp-server-one.vercel.app/instructorClasses/${params?.id}`)
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
        path:"/dashboard/homestudent",
        element:<StudentRoute><StudentHome></StudentHome></StudentRoute>
      },
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
      {
        path:"/dashboard/StudentProfile",
        element:<StudentRoute><StudentProfile></StudentProfile></StudentRoute>,
       
      },
      // ________ admin route___________

      {
        path:"/dashboard/homeadmin",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:"/dashboard/manageusers",
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },

      {
        path:"/dashboard/manageclasses",
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path:"/dashboard/manageclasses/:id",
        element:<AdminRoute><ReviewClasses></ReviewClasses></AdminRoute>
      },
      {
        path:"/dashboard/adminProfile",
        element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      //_____________Instructor__________
      {
        path:"/dashboard/homeinstructor",
        element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path:"/dashboard/addaclass",
        element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute>
      },{
        path:"/dashboard/myClassList",
        element:<InstructorRoute><InstructorClassesList></InstructorClassesList></InstructorRoute>
      },
      {
        path:"/dashboard/instructorProfile",
        element:<InstructorRoute><InstructorProfile></InstructorProfile></InstructorRoute>
      }
    ]
  },
  {
    path:"*",
    element: <NotFound></NotFound>
  }

]);

export default router;
