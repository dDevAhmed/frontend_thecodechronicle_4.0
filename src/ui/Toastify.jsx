/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = ({ message, position = "top-right" }) => {
    useEffect(() => {
        if (message) {
            toast(message);
        }
    }, [message]);

    return (
        <ToastContainer
            position={position}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
};

export default Toastify;