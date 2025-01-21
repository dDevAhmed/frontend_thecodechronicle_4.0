import { useEffect, useState } from 'react'

const useAuthStatusHook = () => {

    // when user is signed in from service, 
    // do the user session/cookie here and set the loggedIn status
    // also handle logged here

    // note - for test only set to true
    const [loggedIn, setLoggedIn] = useState(true)
    const [checkStatus, setCheckStatus] = useState(true)

    // useEffect(() => {
    //     const auth = getAuth()
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setLoggedIn(true)
    //         }
    //         setCheckStatus(false)
    //     })

    // }, [])

    return { loggedIn, checkStatus }
}

export default useAuthStatusHook