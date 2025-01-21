import { useContext } from 'react'
import Modal from '../../../ui/Modal'
import RegisterEmailForm from './RegisterEmailForm';
import VerifyEmailForm from './VerifyEmailForm';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import AuthContext from '../../../contexts/AuthContext';

const AuthModal = () => {

    const {
        showAuthModal, setShowAuthModal,
        showSignInForm,
        showRegisterEmailForm,
        showVerifyEmailForm,
        showSignUpForm
    } = useContext(AuthContext);

    return (
        <Modal showModal={showAuthModal} setShowModal={setShowAuthModal}>
            <div className='bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12'>
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
    )
}

export default AuthModal