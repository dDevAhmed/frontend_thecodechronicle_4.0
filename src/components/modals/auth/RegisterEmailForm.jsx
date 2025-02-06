import { useContext } from 'react'
import { useRegisterEmail } from '../../../services/auth/RegisterEmailService';
import Spinner from '../../../ui/Spinner';
import AuthContext from '../../../contexts/AuthContext';
import { useForm } from '@tanstack/react-form';

const RegisterEmailForm = () => {

    // todo 
    // input fields validation - tanstack form

    const {
        setShowSignInForm, setShowRegisterEmailForm,
        setRegistrationEmail,
    } = useContext(AuthContext)

    const { mutate: registerEmail, isPending, isError, error, isSuccess } = useRegisterEmail();

    const form = useForm({
        defaultValues: {
            email: '',
        },
        onSubmit: async ({ value }) => {
            registerEmail(
                value
            );
            setRegistrationEmail(value.email)
        },
    })

    const handleSwitchForm = async () => {
        setShowRegisterEmailForm(false)
        setShowSignInForm(true)
    }

    return (
        <>
            <h2 className="mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Register your email
            </h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className='space-y-6'>
                <div className="mt-2">
                    <form.Field name="email">
                        {(field) => (
                            <input
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                id="email"
                                type="email"
                                placeholder='Email'
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-primary-blue sm:text-sm/6"

                            />
                        )}
                    </form.Field>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-brand-primary-blue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-blue"
                    >
                        {isPending ? <Spinner color={'#ffffff'} size={20} /> : 'Register'}
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Have an account? {' '}
                <button onClick={handleSwitchForm} className="font-semibold text-brand-primary-blue hover:text-indigo-500">
                    Sign In Here
                </button>
            </p>
        </>
    )
}

export default RegisterEmailForm