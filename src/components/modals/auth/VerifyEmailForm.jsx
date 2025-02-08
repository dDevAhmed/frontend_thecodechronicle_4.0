import { useContext, useEffect, useState } from 'react'
import Spinner from '../../../ui/Spinner';
import { useVerifyEmail } from '../../../services/auth/VerifyEmailService';
import OtpInputCmp from '../../formelements/OtpInputCmp';
import { useForm } from '@tanstack/react-form';
import AuthContext from '../../../contexts/AuthContext';

const VerifyEmailForm = () => {
    // do the auth check before showing the sign in modal
    // when switch to otp form, disable click outside to close modal
    // if otp value.length = 6, auto submit

    const { registrationEmail } = useContext(AuthContext)
    const { mutate: verifyEmail, isPending, isError, error, isSuccess } = useVerifyEmail();

    const form = useForm({
        defaultValues: {
            email: registrationEmail,
            otp: '',
        },
        onSubmit: async ({ value }) => {
            // Do something with form data
            console.log('Registration credentials', value)
            verifyEmail(
                value
            );
        },
    })

    // useEffect(() => {
    //     if (form.values.otp.length === 6) {
    //         console.log('OTP value is complete', form.values.otp)
    //         // form.handleSubmit();
    //     }
    // }, [form.values.otp, form]);

    return (
        <>
            <h2 className="mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Enter OTP sent to email
            </h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}>
                <form.Field name="otp">
                    {(field) => (
                        <OtpInputCmp field={field} />
                    )}
                </form.Field>
                <div className='mt-5'>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {isPending ? <Spinner color={'#ffffff'} size={20} /> : 'Send'}
                    </button>
                </div>
            </form>
            {/* //todo - include timer here */}
            <div className="text-sm text-slate-500 mt-4 text-center">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
        </>
    )
}

export default VerifyEmailForm