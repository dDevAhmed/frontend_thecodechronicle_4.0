import React, { useContext, useEffect, useState } from 'react'
import { lazy, Suspense } from 'react';
import Spinner from '../../ui/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
// import StoryContext from '../../contexts/StoryContext';

const LazyStoryCardMaxi = lazy(() => import('../cards/StoryCardMaxi'));

const StoriesList = () => {

    // filter data to fetch only feed, do in useStoriesHook
    // redo hasMore/fetchMoreStories logic
    // const { data, isPending, isError } = useStories()

    // const { feed, hasMore, fetchMoreStories } = useContext(StoryContext);

    return (

        <p>StoriesList</p>

        // <InfiniteScroll
        //     dataLength={data?.length || 0}
        //     next={() => fetchMoreStories('feed')}
        //     hasMore={hasMore}
        //     loader={<div className='p-10'><Spinner /></div>}
        //     endMessage={
        //         <p className='p-10 text-gray-500 text-center font-medium'>
        //             Yay! You have seen it all
        //         </p>
        //     }
        //     // below props only if you need pull down functionality
        //     refreshFunction={() => fetchMoreStories('feed')}
        //     pullDownToRefresh
        //     pullDownToRefreshThreshold={50}
        //     pullDownToRefreshContent={
        //         <p className='text-center text-md py-5'>&#8595; Pull down to refresh</p>
        //     }
        //     releaseToRefreshContent={
        //         <p className='text-center text-md py-5'>&#8593; Release to refresh</p>
        //     }
        // >
        //     <div className='flex flex-col gap-5'>
        //         {
        //             data?.map((story, index) => (
        //                 <Suspense fallback={<div className='p-5'><Spinner /></div>}  key={index}>
        //                     <LazyStoryCardMaxi post={story} />
        //                 </Suspense>
        //             ))
        //         }
        //     </div>
        // </InfiniteScroll>
    )
}

export default StoriesList