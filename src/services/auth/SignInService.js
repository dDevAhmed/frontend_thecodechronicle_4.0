import { useMutation } from '@tanstack/react-query';

const api = import.meta.env.VITE_API_URL

const signIn = async ({ email, password }) => {
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

    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            console.log('Sign-in successful:', data);
            // setShowModal(false);
        },
        onError: (error) => {
            console.error('Sign-in failed:', error);
        },
    });
};