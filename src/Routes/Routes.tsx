import { createBrowserRouter } from "react-router-dom";
import { HomePage, About, Projects, DivisionDetail, ProjectDetailsWrapper, Gallery, CareersWrapper, AllProjectsByClient, ContactWrapper, CertificateWrapper } from '../Pages/Exports';
import Layout from '../Layout/Layout';
import AwardWrapper from "../Pages/policy";

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
          path: "/:division",
          element: <Projects />
        },
        {
          path: "/:division/project/:id",
          element: <ProjectDetailsWrapper />
        },
        {
          path: "/all-projects",
          element: <AllProjectsByClient />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/career",
          element: <CareersWrapper />,
        },
        {
          path: "/contact",
          element: <ContactWrapper />,
        },
        {
          path: "/certificates",
          element: <CertificateWrapper />,
        },  
        {
          path: "/policy",
          element: <AwardWrapper />,
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