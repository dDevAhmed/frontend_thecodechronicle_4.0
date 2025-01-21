// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import StoryHeader from '../components/story/StoryHeader'
// import StoryBody from '../components/story/StoryBody'
// import StoryComments from '../components/story/StoryComments'
// import Spinner from '../ui/Spinner';
// import StoryContext from '../contexts/StoryContext';

// const Story = () => {
//   // fixme - not a good approach - land at the top by default
//   window.scrollTo({ top: 0, behavior: 'smooth' });
  
//   const { id } = useParams()

//   const { feed } = useContext(StoryContext);
//   const currentPost = feed.find((post) => post.id == id);

//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setPost(currentPost);
//     setLoading(false);
//   }, [id, feed]);
  
//   // fixme - use the react query error, isLoading
//   if (error) return <p>Error: {error}</p>;
//   if (!feed || !currentPost) {
//     return <div className='flex items-center justify-center p-10'><Spinner /></div>;
//   }

//   return (
//     <div className='h-screen relative -mx-[1.125rem] md:px-[1.125rem] md:h-full lg:static lg:flex lg:flex-col lg:gap-5'>
//       <div className='fixed h-1/2 w-full md:sticky md:top-[6.75rem] md:h-64 lg:h-72 lg:sticky lg:top-[6.75rem]'>
//         <StoryHeader post={post} />
//       </div>
//       <div className="absolute top-1/2 -mt-10 w-screen md:w-full md:sticky md:top-[5rem] lg:static lg:mt-0">
//         <StoryBody post={post} />
//       </div>
//       <StoryComments />
//     </div>
//   )
// }

// export default Story