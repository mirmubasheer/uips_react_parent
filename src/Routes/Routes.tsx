import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../Pages/Exports';
import Layout from '../Layout/Layout';
import Projects from "../Pages/Projects";
import About from "../Pages/About";


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
          //projects
          path: "/projects",
          element: <Projects />,
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
