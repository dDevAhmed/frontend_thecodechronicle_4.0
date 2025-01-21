import { useQuery } from '@tanstack/react-query';

const api = import.meta.env.VITE_API_URL

const fetchCategories = async () => {

  try {
    const response = await fetch(`${api}/categories`);

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(error.message);
  }
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
