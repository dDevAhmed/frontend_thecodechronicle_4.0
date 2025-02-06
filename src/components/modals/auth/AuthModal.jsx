import { useContext } from 'react'
import Modal from '../../../ui/Modal'
import RegisterEmailForm from './RegisterEmailForm';
import VerifyEmailForm from './VerifyEmailForm';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import AuthContext from '../../../contexts/AuthContext';
import Toastify from '../../../ui/Toastify';
import { Bounce } from 'react-toastify';

const AuthModal = () => {

    const {
        showAuthModal, setShowAuthModal,
        showSignInForm,
        showRegisterEmailForm,
        showVerifyEmailForm,
        showSignUpForm
    } = useContext(AuthContext);

    return (
        <>
        {/* //fixme - move to global stage */}
            <Toastify
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            
            <Modal showModal={showAuthModal} setShowModal={setShowAuthModal}>

                <div className='px-6 py-12 shadow-sm sm:rounded-lg sm:px-12'>
                    <div className={showSignInForm ? 'block' : 'hidden'}>
                        <SignInForm />
                    </div>
                    <div className={showRegisterEmailForm ? 'block' : 'hidden'}>
                        <RegisterEmailForm />
                    </div>
                    <div className={showVerifyEmailForm ? 'block' : 'hidden'}>
                        <VerifyEmailForm />
                    </div>
                    <div className={showSignUpForm ? 'block' : 'hidden'}>
                        <SignUpForm />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AuthModal