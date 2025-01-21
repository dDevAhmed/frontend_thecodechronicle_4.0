import { useEffect, useState } from 'react'

const useAuthStatusHook = () => {

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