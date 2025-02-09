import { lazy, Suspense } from 'react';
import Spinner from '../../ui/Spinner'
import { useHeadlines } from '../../services/StoryService';
import HeadlineItemSkeleton from '../skeletons/HeadlineItemSkeleton';

const LazyHeadlineItem = lazy(() => import("./HeadlineItem"));

const HeadlinesList = () => {

    const { data, isPending, isError } = useHeadlines()

    return (

        <div className="snap-x snap-mandatory flex gap-3 overflow-x-auto hide-scrollbar scroll-smooth py-1 md:snap-none">
            {/* //fixme - limit to 5 */}
            {
                data?.items.map((story, index) => (
                    <Suspense key={index}
                        fallback={
                            <div className='flex items-center justify-center p-10'>
                                {/* <Spinner /> */}
                                <HeadlineItemSkeleton />
                            </div>
                        }
                    >
                        <div

                            className="snap-center shrink-0 w-11/12 md:w-96 lg:w-60"
                        >
                            <LazyHeadlineItem headline={story} />
                        </div>
                    </Suspense>
                ))
            }
        </div>
    );

};

export default HeadlinesList;
