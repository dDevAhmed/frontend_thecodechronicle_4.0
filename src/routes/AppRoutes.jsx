// routes/AppRoutes.jsx  
import { createBrowserRouter, Outlet } from "react-router-dom"
import Layout from "../layout/Layout"
import PrivateRoutes from './PrivateRoutes'
import NotFound from "../pages/NotFound"
import UnauthorizedResource from "../pages/UnauthorizedResource"
import Home from '../pages/Home'
import Explore from "../pages/Explore";
import Saved from "../pages/Saved"
import ProtectedRoutes from "./ProtectedRoutes"
import CreateStory from "../pages/admin/CreateStory"
// import Story from '../pages/Story'

const router = createBrowserRouter([
    // /post/new -> add new post (protected, admin layout)
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/unauthorized',
        element: <UnauthorizedResource />
    },
    {
        path: '/',
        element: <Layout><Outlet /></Layout>,
        children: [
            {
                index: true,
                element: <Home />
            },
            // todo remove after 
            {
                path: 'create-story',
                element: <CreateStory />
            },
            // {
            //     path: 'story',        //explore -> explore
            //     element: <Story />
            // },
            // {
            //     path: 'story/:id',       //news/{slugified-title}
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
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'saved',
                        element: <Saved />
                    },
                    // {
                    //     path: 'account',
                    //     element: <Account />
                    // },
                    {
                        element: <ProtectedRoutes requiredRole={'admin'} />,
                        children: [
                            // admin/stories (admin created), create story
                            // {
                            //     path: 'create-story',
                            //     element: <CreateStory />
                            // }
                        ]
                    }
                ]
            },
        ]
    },
]);

export default router;