// import { Navigate, Outlet } from 'react-router-dom'
// import useAuthStatusHook from '../hooks/useAuthStatusHook';
// // import Spinner from './Spinner'

// const PrivateRoutes = () => {
//     // const loggedIn = false;

//     // const { loggedIn, checkStatus } = UserAuthStatus();
//     const { loggedIn } = useAuthStatusHook();

//     // if (checkStatus) {
//         // return <Spinner />
//     // }

//     return (
//         <>
//             {loggedIn ? <Outlet /> : <Navigate to={'/login'} />}
//         </>
//     )
// }

// export default PrivateRoutes