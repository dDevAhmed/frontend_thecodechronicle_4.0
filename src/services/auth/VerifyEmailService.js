import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const api = import.meta.env.VITE_API_URL

const verifyEmail = async ({ email, otp }) => {

    try {
        const response = await fetch(`${api}/auth/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to verify email');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const useVerifyEmail = () => {

    const { setShowVerifyEmailForm, setShowSignUpForm } = useContext(AuthContext);

    return useMutation({
        mutationFn: verifyEmail,
        onSuccess: (data) => {
            setShowVerifyEmailForm(false)
            setShowSignUpForm(true)
            toast.success('Email verified successfully!', data);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};