import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { toast } from 'react-toastify';
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

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.response.error || 'Failed to register email');
            // throw new Error(data?.message || 'Failed to register email');       //todo use the one above
        }

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
            showRegisterEmailForm(false);
            setShowVerifyEmailForm(true)
            toast.success('OTP sent to email!', data);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};