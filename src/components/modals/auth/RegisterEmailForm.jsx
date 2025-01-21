import { useContext, useState } from 'react'
import { useRegisterEmail } from '../../../services/auth/RegisterEmailService';
import Spinner from '../../../ui/Spinner';
import AuthContext from '../../../contexts/AuthContext';

const RegisterEmailForm = () => {
    // do the auth check before showing the sign in modal
    // make into different component - sign in, sign up, otp
    // when switch to otp form, disable click outside to close modal

    const { setShowSignInForm, setShowRegisterEmailForm } = useContext(AuthContext)

    const [email, setEmail] = useState('');

    const { mutate: registerEmail, isPending, isError, error, isSuccess } = useRegisterEmail();

    const handleRegisterEmail = async (event) => {
        event.preventDefault();

        registerEmail(
            { email },
        );

        console.log(email)

    };

    const handleSwitchForm = async () => {
        setShowRegisterEmailForm(false)
        setShowSignInForm(true)
    }

    return (
        <>
            <h2 className="mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Register your email
            </h2>
            <form onSubmit={handleRegisterEmail} className='space-y-6'>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={'handleGotoVerifyEmail'}      //fixme - remove after
                    >
                        {isPending ? <Spinner color={'#ffffff'} /> : 'Register'}
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Have an account? {' '}
                <button onClick={handleSwitchForm} className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Sign In Here
                </button>
            </p>
        </>
    )
}

export default RegisterEmailForm