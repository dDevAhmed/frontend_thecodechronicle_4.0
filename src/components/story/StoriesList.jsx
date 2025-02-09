import React, { useContext, useEffect, useState } from 'react'
import { lazy, Suspense } from 'react';
import Spinner from '../../ui/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useStories } from '../../services/StoryService';
import StoryCardMaxiSkeleton from '../skeletons/StoryCardMaxiSkeleton';
// import StoryContext from '../../contexts/StoryContext';

const LazyStoryCardMaxi = lazy(() => import('../cards/StoryCardMaxi'));

const StoriesList = () => {

    const { data, isPending, isError } = useStories()

    return (

        <InfiniteScroll
            dataLength={data?.items.length || 0}
            // next={() => fetchMoreStories('feed')}        //fixme - implement
            hasMore={true}
            loader={<div className='py-5'><StoryCardMaxiSkeleton /></div>}
            endMessage={
                <p className='p-10 text-gray-500 text-center font-medium'>
                    Yay! You have seen it all
                </p>
            }
            // below props only if you need pull down functionality
            // refreshFunction={() => fetchMoreStories('feed')}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //     <p className='text-center text-md py-5'>&#8595; Pull down to refresh</p>
            // }
            // releaseToRefreshContent={
            //     <p className='text-center text-md py-5'>&#8593; Release to refresh</p>
            // }
        >
            <div className='flex flex-col gap-5'>
                {
                    data?.items.map((story, index) => (
                        <Suspense fallback={<div className='p-5'><Spinner /></div>} key={index}>
                            <LazyStoryCardMaxi post={story} />
                        </Suspense>
                    ))
                }
            </div>
        </InfiniteScroll>
    )
}

export default StoriesList