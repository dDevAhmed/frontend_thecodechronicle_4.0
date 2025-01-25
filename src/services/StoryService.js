import { useQuery, useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import AuthContext from '../contexts/AuthContext';

const api = import.meta.env.VITE_API_URL

const fetchStories = async (page = 1) => {

  try {
    const response = await fetch(`${api}/stories?page=${page}`);

    if (!response.ok) {
      throw new Error('Failed to fetch stories');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(error, "Failed to fetch stories");
  }
}

export const useStories = () => {
  return useQuery({
    queryKey: ['stories'],
    queryFn: fetchStories,
  });
};

const fetchHeadlines = async (page = 1) => {

  try {
    const response = await fetch(`${api}/stories/headlines?page=${page}`);

    if (!response.ok) {
      throw new Error('Failed to fetch headlines');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(error, "Failed to fetch headlines");
  }
}

export const useHeadlines = () => {
  return useQuery({
    queryKey: ['headlines'],
    queryFn: fetchHeadlines,
  });
};

// fetch a single story
const fetchStory = async (id) => {

  try {
    const response = await fetch(`${api}/stories/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch story');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(error, "Failed to fetch story");
  }
}

export const useStory = (id) => {
  return useQuery({
    queryKey: ['Story', id],
    queryFn: () => fetchStory(id),
  });
};

// create story
const createStory = async (payload) => {

  try {
    const response = await fetch(`${api}/stories/create-story`, {
      method: 'POST',
      headers: {
        // 'Authorization': `Bearer ${token}`,    //fixme - revert for user auth
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'Failed to create a story, try again');
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const useCreateStory = () => {

  const { authToken } = useContext(AuthContext);

  return useMutation({
    mutationFn: createStory,
    // mutationFn: (payload) => createStory({ payload, token: authToken }),
    onSuccess: (data) => {
      toast.success('Story created successful!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};