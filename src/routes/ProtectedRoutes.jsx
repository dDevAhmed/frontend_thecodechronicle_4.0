/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import useAuthStatusHook from '../hooks/useAuthStatusHook';
// import Spinner from './Spinner'

const ProtectedRoutes = ({ requiredRole }) => {
    const { setShowAuthModal, hasRole } = useContext(AuthContext);

    const { loggedIn } = useAuthStatusHook();

    if (!loggedIn) {
        setShowAuthModal(true);
        return null; // Prevent rendering of the Outlet component
    }

    if (!hasRole(requiredRole)) {
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
}

export default ProtectedRoutes