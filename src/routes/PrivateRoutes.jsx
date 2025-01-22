import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import useAuthStatusHook from '../hooks/useAuthStatusHook';
// import Spinner from './Spinner'

const PrivateRoutes = () => {

    const { authToken, user, logout, setShowAuthModal } = useContext(AuthContext);

    // const { loggedIn, checkStatus } = UserAuthStatus();
    const { loggedIn } = useAuthStatusHook();

    // if (checkStatus) {
    // return <Spinner />
    // }

    if (!loggedIn) {
        setShowAuthModal(true);
        return null; // Prevent rendering of the Outlet component
    }

    return <Outlet />;
}

export default PrivateRoutes