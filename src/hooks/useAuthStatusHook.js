import { useContext, useEffect, useState } from 'react'
import AuthContext from '../contexts/AuthContext';

const useAuthStatusHook = () => {

    // when user is signed in from service, 
    // do the user session/cookie here 
    // and set the loggedIn status
    // also handle log out here

    // logged in checks for session
    const { authToken } = useContext(AuthContext);
    const [loggedIn, setLoggedIn] = useState(!!authToken);

    useEffect(() => {
        setLoggedIn(!!authToken);
    }, [authToken]);

    return { loggedIn };
}

export default useAuthStatusHook