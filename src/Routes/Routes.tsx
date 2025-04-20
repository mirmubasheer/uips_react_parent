import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../Pages/Exports';
import Layout from '../Layout/Layout';
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import DivisionDetail from "../Pages/Homepage/DivisionDetail";
import ProjectDetailsWrapper from '../Pages/Projects/ProjectDetails'
import Gallery from "../Pages/Gallery";
import CareersWrapper from "../Pages/Careers";
import AllProjectsByClient from "../Pages/Projects/AllProjects/AllProjectsByClient";


const router = createBrowserRouter([

    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
         
          path: "/division/:slug",
          element: <DivisionDetail />,
        },

        {
          path:"/:division",
           element:<Projects />
        },
        {
          path:"/:division/project/:id",
           element:<ProjectDetailsWrapper />
        },
        {
          path: "/all-projects",
          element: <AllProjectsByClient />, // Add new route
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/career",
          element: <CareersWrapper />,
        },

        //projects/:id
        // {
        //   path : "/projects/:slug",
        //   element : <ProjectDetails />,
        // },
        // {
        //   path : "/channelpartner",
        //   element : <ChannelPartner />,
        // },
        // {
        //   path : "/gallery",
        //   element : <Gallery />,
        // },
        // {
        //   path : "/gallery/:id",
        //   element : <GalleryDetails />,
        // },

        // {
        //   path : "/blog",
        //   element : <Blog />,
        // },
        // {
        //   path:"/blog/:id",
        //   element:<BlogDetails/>
        // },

        // {
        //   path : "/contact",
        //   element : <ContactUs />,
        // },
        ],
    },
]);


export default router;
