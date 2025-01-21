import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const api = import.meta.env.VITE_API_URL

const signIn = async ({ email, password }) => {

    console.log('email from service', email)
    try {
        const response = await fetch(`${api}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to sign in');
        }

        const data = await response.json();
        console.log('response from api says', data)
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const useSignIn = () => {

    const { login } = useContext(AuthContext);
    const { setShowAuthModal } = useContext(AuthContext);

    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            console.log('Sign-in successful:', data);
            if (data.access_token) {
                login(data.access_token);
                setShowAuthModal(false);
            }
        },
        onError: (error) => {
            console.error('Sign-in failed:', error);
        },
    });
};