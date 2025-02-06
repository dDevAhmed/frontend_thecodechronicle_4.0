import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const api = import.meta.env.VITE_API_URL

const signUp = async ({ firstName, lastName, email, password }) => {

    try {
        const response = await fetch(`${api}/auth/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to sign up');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const useSignUp = () => {

    const { login } = useContext(AuthContext);
    const { setShowAuthModal } = useContext(AuthContext);

    return useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            if (data.access_token) {
                login(data.access_token);
                setShowAuthModal(false);
                toast.success('OTP sent to email!');
            }
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};