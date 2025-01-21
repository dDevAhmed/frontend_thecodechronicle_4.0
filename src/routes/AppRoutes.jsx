// routes/AppRoutes.jsx  
import { createBrowserRouter, Outlet } from "react-router-dom"
import Layout from "../layout/Layout"
// import PrivateRoutes from './PrivateRoutes'
import NotFound from "../pages/NotFound"
import Home from '../pages/Home'
import Explore from "../pages/Explore";
// import Saved from "../pages/Saved"
// import Story from '../pages/Story'

const router = createBrowserRouter([
    // /post/new -> add new post (protected, admin layout)
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Layout><Outlet /></Layout>,
        children: [
            {
                index: true,
                element: <Home />
            },
            // {
            //     path: 'story',        //explore -> explore
            //     element: <Story />
            // },
            // {
            //     path: 'news/:id',       //news/{slugified-title}
            //     element: <Story />
            // },
            {
                path: 'explore',
                element: <Explore />
            },
            // {
            //     path: 'blogs',
            //     element: <Blogs />
            // },
            // {
            //     path: 'category/:category',
            //     element: <Category />
            // },
            // {
            //     path: 'tag/:tag',
            //     element: <Tag />
            // },
            // {
            //     element: <PrivateRoutes />,
            //     children: [
            //         {
            //             path: 'saved',
            //             element: <Saved />
            //         },
            //         // {
            //         //     path: 'account',
            //         //     element: <Account />
            //         // },
            //     ]
            // },
        ]
    },
]);

export default router;