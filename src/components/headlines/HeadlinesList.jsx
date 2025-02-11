import { lazy, Suspense } from 'react';
import { useHeadlines } from '../../services/StoryService';
import HeadlineItemSkeleton from '../skeletons/HeadlineItemSkeleton';
import Card from '../../ui/Card';

const LazyHeadlineItem = lazy(() => import("./HeadlineItem"));

const HeadlinesList = () => {

    const { data, isPending, isError } = useHeadlines()

    // isPending - spinner

    return (

        <div className="snap-x snap-mandatory flex gap-3 overflow-x-auto hide-scrollbar scroll-smooth py-1 md:snap-none">
            {/* //fixme - limit to 5 */}
            {
                data?.items.map((story, index) => (
                    <Suspense key={index}
                        fallback={
                            <Card classNames={'rounded-2xl p-5 bg-white snap-center shrink-0 w-11/12 md:w-96 lg:w-60'} key={index}>
                                <HeadlineItemSkeleton />
                            </Card>
                        }
                    >
                        <div className="snap-center shrink-0 w-11/12 md:w-96 lg:w-60">
                            <LazyHeadlineItem headline={story} />
                        </div>
                    </Suspense>
                ))
            }
        </div >
    );

};

export default HeadlinesList;
