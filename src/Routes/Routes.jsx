import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Connect from "../Pages/Connect/Connect";
import WorkUs from "../Pages/WorkUs/WorkUs";
import GroupHikes from "../Pages/GroupHikes/GroupHikes";
import Shop from "../Pages/Shop/Shop";
import Signup from "../Pages/Authentication/Signup/Signup";
import Signin from "../Pages/Authentication/Signin/Signin";
import PrivateRoute from "../Pages/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import AllUsers from "../DashboardPage/AllUsers/AllUsers";
import BlogAdd from "../DashboardPage/BlogAdd/BlogAdd";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/hike",
        element: <GroupHikes></GroupHikes>,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
      },
      {
        path: "/work",
        element: <WorkUs></WorkUs>,
      },
      {
        path: "/connect",
        element: <Connect></Connect>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "blogAdd",
        element: <BlogAdd></BlogAdd>,
      },
    ],
  },
]);
