import { lazy, Suspense, useContext } from 'react';
import Spinner from '../../ui/Spinner'
// import StoryContext from '../../contexts/StoryContext';

const LazyHeadlineItem = lazy(() => import("./HeadlineItem"));

const HeadlinesList = () => {

    // useStories query here, filtered/unfiltered

    // const { headlines } = useContext(StoryContext);

    // return (

    //     <div className="snap-x snap-mandatory flex gap-3 overflow-x-auto hide-scrollbar scroll-smooth py-1 md:snap-none">
    //         {/* //fixme - limit to 5 */}
    //         {
    //             headlines.map((story, index) => (
    //                 <Suspense fallback={<div className='flex items-center justify-center p-10'><Spinner /></div>}>
    //                     <div
    //                         key={index}
    //                         className="snap-center shrink-0 w-11/12 md:w-96 lg:w-60"
    //                     >
    //                         <LazyHeadlineItem headline={story} />
    //                     </div>
    //                 </Suspense>
    //             ))
    //         }
    //     </div>
    // );

    return (
        <p>Headlines List</p>
    );
};

export default HeadlinesList;
