import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Connect from "../Pages/Connect/Connect";
import WorkUs from "../Pages/WorkUs/WorkUs";
import GroupHikes from "../Pages/GroupHikes/GroupHikes";
import Shop from "../Pages/Shop/Shop";
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
        element: <Shop></Shop>,
      },
      {
        path: "/work",
        element: <WorkUs></WorkUs>,
      },
      {
        path: "/connect",
        element: <Connect></Connect>,
      },
    ],
  },
]);
