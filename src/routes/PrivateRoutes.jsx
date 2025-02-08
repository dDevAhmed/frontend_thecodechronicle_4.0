import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import useAuthStatusHook from '../hooks/useAuthStatusHook';
// import Spinner from './Spinner'

const PrivateRoutes = () => {

    const { setShowAuthModal } = useContext(AuthContext);

    const { loggedIn } = useAuthStatusHook();

    if (!loggedIn) {
        setShowAuthModal(true);
        return null; // Prevent rendering of the Outlet component
    }

    return <Outlet />;
}

export default PrivateRoutes