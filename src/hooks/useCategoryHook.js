// import React, { useContext, useEffect, useState } from 'react'
// import StoryContext from '../contexts/StoryContext';
// import { axiosFetchCategoriesData } from '../services/CategoryService';

// // handle the logic
// // 1. map the category to get the name
// // 2. fetch single category

// // fetch resource (stories)
// const useCategoryHook = () => {
//     // const { data: storiesData, isLoading: storiesLoading, error: storiesError } = useStories();

//     const [categories, setCategories] = useState([]);

//     const fetchCategories = async () => {

//         try {
//             const data = await axiosFetchCategoriesData();     //replace with useStories and destructure - data, error, ...
//             setCategories(data);

//         } catch (err) {
//             setError(err);
//             console.error("Error fetching initial categories:", err);
//         }
//         // finally {
//         //     setLoading(false);
//         // }
//     }

//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     return {
//         categories
//     };
// }

// export default useCategoryHook;
