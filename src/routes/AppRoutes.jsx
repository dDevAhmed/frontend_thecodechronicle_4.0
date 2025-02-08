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
import Story from '../pages/Story'
import OtpInputCmp from "../components/formelements/OtpInputCmp"
import Account from "../pages/Account"

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
            {
                path: 'explore',
                element: <Explore />
            },
            // {
            //     path: 'blogs',
            //     element: <Blogs />
            // },
            {
                path: 'story/:slugTitle',
                element: <Story />
            },
            // {
            //     path: 'category/:category',
            //     element: <Category />
            // },
            // {
            //     path: 'tag/:tag',
            //     element: <Tag />
            // },
            // todo move to (S)admin layout 
            {
                path: 'stories/create',
                element: <CreateStory />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'saved',
                        element: <Saved />
                    },
                    {
                        path: 'account',
                        element: <Account />
                    },
                     // todo move to (S)admin layout 
                    {
                        element: <ProtectedRoutes requiredRole={'admin'} />,
                        children: [
                            // admin/stories (admin created), create story
                            // {
                            //     path: 'stories/create',
                            //     element: <CreateStory />
                            // }
                        ]
                    }
                ]
            },
        ]
    },
    // here goes (S)admin layout - protected and private included
]);

export default router;