/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { jwtDecode } from 'jwt-decode';
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('access_token') || '');
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (authToken) {
            const decodedToken = jwtDecode(authToken);
            setUser(decodedToken);
        } else {
            setUser(null);
        }
    }, [authToken]);

    const login = (token) => {
        setAuthToken(token);
        localStorage.setItem('access_token', token);
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
    };

    const logout = () => {
        setAuthToken('');
        localStorage.removeItem('access_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            authToken, user, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;