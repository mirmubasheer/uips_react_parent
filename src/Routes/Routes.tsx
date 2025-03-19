import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../Pages/Exports';
import Layout from '../Layout/Layout';


const router = createBrowserRouter([

    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        // {
        //   path: "/about",
        //   element: <About />,
        // },
        // {
        //   //projects
        //   path: "/projects",
        //   element: <Projects />,
        // },

        // //projects/:id
        // {
        //   path : "/projects/:id",
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
