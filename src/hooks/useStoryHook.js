// import React, { useContext, useEffect, useState } from 'react'
// import StoryContext from '../contexts/StoryContext';
// import { axiosFetchStoriesData } from '../services/StoryService';

// // handle the logic
// // 1. (un)bookmark news post -> user feature ???
// // 3. filter post in explore page -> by category
// // 4. commenting on news post -> 
// // 5. handle like post
// // 6. handle bookmark post

// // fetch resource (stories)
// const useStoryHook = () => {
//     // const { data: storiesData, isLoading: storiesLoading, error: storiesError } = useStories();

//     const [axiosStoriesData, setAxiosStoriesData] = useState(null);     //rename to storiesData
//     const [headlines, setHeadlines] = useState([]);
//     const [feed, setFeed] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [hasMore, setHasMore] = useState(false);

//     const fetchInitialStories = async () => {

//         try {
//             const data = await axiosFetchStoriesData();     //replace with useStories and destructure - data, error, ...
//             setAxiosStoriesData(data);

//             if (data && data.items) {

//                 const initialHeadlines = data?.items.filter((story) => story.setAs === 'headline');
//                 const initialFeed = data?.items.filter((story) => story.setAs === 'feed');

//                 setFeed(initialFeed);

//                 // if headlines is not up to 10 from the first page, fetchMore
//                 if (initialHeadlines.length < 10) {
//                     fetchMoreStories('headline')
//                 } else {
//                     setHeadlines(initialHeadlines)
//                     console.log('headlines', initialHeadlines)
//                 }

//                 setHasMore(data.meta.currentPage < data.meta.totalPages);       //fixme - revert back
//             }
//         } catch (err) {
//             setError(err);
//             console.error("Error fetching initial stories:", err);
//         }
//         // finally {
//         //     setLoading(false);
//         // }
//     }

//     const fetchMoreStories = async (storySetAs) => {
//         try {
//             const nextPage = currentPage + 1;
//             const newStoriesData = await axiosFetchStoriesData(nextPage);

//             const newStories = newStoriesData.items.filter((story) => story.setAs === storySetAs);

//             if (storySetAs === 'headline') {
//                 setHeadlines((prevHeadlines) => [...prevHeadlines, ...newStories]);
//             } else {
//                 setFeed((prevFeed) => [...prevFeed, ...newStories]);
//             }

//             setCurrentPage(nextPage);
//             setHasMore(currentPage < newStoriesData.meta.totalPages);       //fixme - revert back

//         } catch (err) {
//             console.error("Error fetching more stories:", err);
//         }
//     };

//     useEffect(() => {
//         fetchInitialStories();
//     }, []);

//     return {
//         axiosStoriesData,
//         setAxiosStoriesData,
//         headlines,
//         setHeadlines,
//         feed,
//         setFeed,
//         loading,
//         setLoading,
//         error,
//         setError,
//         currentPage,
//         setCurrentPage,
//         hasMore,
//         setHasMore,
//         fetchMoreStories,
//     };
// }

// export default useStoryHook;
