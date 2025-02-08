import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

// const cloudName = import.meta.env.VITE_MEDIA_CLOUD_NAME;
const uploadEndpoint = import.meta.env.VITE_MEDIA_CLOUD_UPLOAD_ENDPOINT;
const apiKey = import.meta.env.VITE_MEDIA_CLOUD_API_KEY;

// upload media
const uploadMedia = async (file) => {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'story_primary_media');

    try {
        const response = await fetch(uploadEndpoint, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(data?.message || 'Failed to upload file, try again');
        }

        const data = await response.json();
        return data.secure_url;

    } catch (error) {
        throw new Error(error.message || 'Failed to upload file, try again');
    }
};

export const useUploadMedia = () => {

    const { authToken } = useContext(AuthContext);

    return useMutation({
        mutationFn: uploadMedia,
        // mutationFn: (payload) => uploadMedia({ payload, token: authToken }),
        onSuccess: (data) => {
            return data;
        },
        onError: (error) => {
            return error;
        },
    });
};