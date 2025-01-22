import { useState } from 'react'
import Spinner from '../../../ui/Spinner';
import { useVerifyEmail } from '../../../services/auth/VerifyEmailService';

const VerifyEmailForm = () => {
    // do the auth check before showing the sign in modal
    // when switch to otp form, disable click outside to close modal

    const [otp, setOtp] = useState('');

    const { mutate: verifyEmail, isPending, isError, error, isSuccess } = useVerifyEmail();

    const handleVerifyEmail = async (event) => {
        event.preventDefault();

        verifyEmail(
            { otp },
        );

        console.log(otp)
    };

    return (
        <>
            <h2 className="mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Enter OTP sent to email
            </h2>
            <form id="otp-form" onSubmit={handleVerifyEmail} className='space-y-6'>
                <div className="flex items-center justify-center gap-3">
                    <input
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        pattern="\d*" maxLength="1" />
                    <input
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength="1" />
                    <input
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength="1" />
                    <input
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength="1" />
                </div>
                {/* <div className="max-w-[260px] mx-auto mt-4">
                    <button type="submit"
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                        Account</button>
                </div> */}
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {isPending ? <Spinner color={'#ffffff'} size={20}/> : 'Verify'}
                    </button>
                </div>
                {isError && <p>Error: {error.message}</p>}
            </form>
            <div className="text-sm text-slate-500 mt-4 text-center">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
        </>
    )
}

export default VerifyEmailForm