import { useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useContext } from 'react';
// import AuthContext from '../contexts/AuthContext';

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

// create category - ONLY BY SAdmin
const createCategory = async (payload) => {

  try {
    const response = await fetch(`${api}/categories`, {
      method: 'POST',
      headers: {
        // 'Authorization': `Bearer ${token}`,    //fixme - revert for SAdmin auth
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'Failed to create a category, try again');
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const useCreateCategory = () => {

  // const { authToken } = useContext(AuthContext);

  return useMutation({
    mutationFn: createCategory,
    // mutationFn: (payload) => createCategory({ payload, token: authToken }),
    onSuccess: (data) => {
      toast.success('Category created successful!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};