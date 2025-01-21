import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const api = import.meta.env.VITE_API_URL

const registerEmail = async ({ email }) => {
    try {
        const response = await fetch(`${api}/auth/register-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to register email');
        }

        const data = await response.json();
        console.log('response from api says', data)
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const useRegisterEmail = () => {
    const { showRegisterEmailForm, setShowVerifyEmailForm } = useContext(AuthContext);

    return useMutation({
        mutationFn: registerEmail,
        onSuccess: (data) => {
            console.log('Email registered successfully:', data);
            showRegisterEmailForm(false);
            setShowVerifyEmailForm(true)
        },
        onError: (error) => {
            console.error('Email registration failed:', error);
        },
    });
};