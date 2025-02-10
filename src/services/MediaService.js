import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

// const cloudName = import.meta.env.VITE_MEDIA_CLOUD_NAME;
const uploadEndpoint = import.meta.env.VITE_MEDIA_CLOUD_UPLOAD_ENDPOINT;
const apiKey = import.meta.env.VITE_MEDIA_CLOUD_API_KEY;

// upload media
const uploadMedia = async (file) => {
    let preset;

    if (file.type.startsWith('image/')) {
        preset = 'story_image_preset';
    }
    else if (file.type.startsWith('video/')) {
        preset = 'story_video_preset';
    } else {
        throw new Error('Unsupported file type. Please upload an image or video.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset);

    try {
        const response = await fetch(uploadEndpoint, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.message || 'Failed to upload file, try again');
        }

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