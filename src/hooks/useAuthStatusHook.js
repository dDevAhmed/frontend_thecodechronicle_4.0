import { useContext, useEffect, useState } from 'react'
import AuthContext from '../contexts/AuthContext';

const useAuthStatusHook = () => {

    const { authToken, authUser, logout } = useContext(AuthContext);

    // when user is signed in from service, 
    // do the user session/cookie here 
    // and set the loggedIn status
    // also handle log out here

    // logged in checks for session

    // note - for test only set to true
    const [loggedIn, setLoggedIn] = useState(false)
    // const [checkStatus, setCheckStatus] = useState(true)

    useEffect(() => {
        if (authToken) {
            setLoggedIn(true)
        }

    }, [authToken])

    return { loggedIn }
}

export default useAuthStatusHook