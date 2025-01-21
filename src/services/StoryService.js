import { useQuery } from '@tanstack/react-query';

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
    throw new Error("Failed to fetch stories");
  }
}

export const useStories = () => {
  return useQuery({
    queryKey: ['stories'],
    queryFn: fetchStories,
  });
};
