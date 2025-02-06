/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { jwtDecode } from 'jwt-decode';
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // auth
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [showSignInForm, setShowSignInForm] = useState(true)      //to be the default view, change back
    const [showRegisterEmailForm, setShowRegisterEmailForm] = useState(false)
    const [showVerifyEmailForm, setShowVerifyEmailForm] = useState(false)        //todo change back
    const [showSignUpForm, setShowSignUpForm] = useState(false)

    const [registrationEmail, setRegistrationEmail] = useState('');

    const [authToken, setAuthToken] = useState();
    const [authUser, setAuthUser] = useState(null);

    // might be use for refresh token
    // useEffect(() => {
    //     if (authToken) {
    //         const decodedToken = jwtDecode(authToken);
    //         setAuthUser(decodedToken);
    //     } else {
    //         setAuthUser(null);
    //     }
    // }, [authToken]);

    const login = (token) => {
        try {
            if (token) {
                setAuthToken(token);

                const decodedToken = jwtDecode(token);
                setAuthUser(decodedToken);
            }
        } catch (error) {
            setAuthToken(null);
            throw new Error("Error finding user", error);
            
        }
        // localStorage.setItem('access_token', token);        //fixme - remove all storage to local storage
    };

    const logout = () => {
        setAuthToken('');
        setAuthUser(null);
    };

    // const hasRole = (role) => {
    //     return user?.roles?.includes(role);
    // };

    const hasRole = (role) => {
        return authUser?.role === role;
    };

    return (
        <AuthContext.Provider value={{
            showAuthModal, setShowAuthModal,
            showSignInForm, setShowSignInForm,
            showRegisterEmailForm, setShowRegisterEmailForm,
            showVerifyEmailForm, setShowVerifyEmailForm,
            showSignUpForm, setShowSignUpForm,
            
            authToken, authUser, login, logout, hasRole,
            registrationEmail, setRegistrationEmail
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;