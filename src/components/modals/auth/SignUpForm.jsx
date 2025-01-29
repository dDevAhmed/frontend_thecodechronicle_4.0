import { useContext } from 'react'
import { useSignUp } from '../../../services/auth/SignUpService';
import Spinner from '../../../ui/Spinner'
import AuthContext from "../../../contexts/AuthContext";
import { useForm } from '@tanstack/react-form';

const SignUpForm = () => {

    // todo 
    // input fields validation - tanstack form
    // get verified email and populate the email field - save user from retyping email

    const { registrationEmail } = useContext(AuthContext);

    const { mutate: signUp, isPending, isError, error, isSuccess } = useSignUp();

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',      //set the registration from context - registrationEmail
            password: '',
        },
        onSubmit: async ({ value }) => {
            signUp(
                value
            );
        },
    })

    return (
        <>
            <h2 className="mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Complete sign up
            </h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }} className='space-y-6'>

                <div className="mt-2">
                    <form.Field name="firstName">
                        {(field) => (
                            <input
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                id="firstName"
                                type="text"
                                placeholder='First Name'
                                required
                                className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        )}
                    </form.Field>
                </div>

                <div className="mt-2">
                    <form.Field name="lastName">
                        {(field) => (
                            <input
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                id="lastName"
                                type="text"
                                placeholder='Last Name'
                                required
                                className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        )}
                    </form.Field>
                </div>

                <div className="mt-2">
                    {/* //todo - get verified email from context */}
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
                                className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        )}
                    </form.Field>
                </div>

                <div className="mt-2">
                    <form.Field name="password">
                        {(field) => (
                            <input
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                id="password"
                                type="password"
                                placeholder='Password'
                                required
                                className="block w-full rounded-md bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        )}
                    </form.Field>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-brand-blue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {isPending ? <Spinner color={'#ffffff'} size={20} /> : 'Sign up'}
                    </button>
                </div>
            </form>

        </>
    )
}

export default SignUpForm