import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useStory } from '../services/StoryService';
import { capitalizeWords } from '../utils/capitalize'
import { Helmet } from "react-helmet";
import StoryHeader from '../components/story/StoryHeader'
import StoryBody from '../components/story/StoryBody'
import StoryComments from '../components/story/StoryComments'
import Spinner from '../ui/Spinner';

const Story = () => {
    // always land at the top of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    const { slugTitle } = useParams()

    const { data: post, isPending, isError } = useStory(slugTitle)

    if (isPending) {
        // todo - consider using skeleton
        return <div className='flex items-center justify-center p-10'><Spinner /></div>;
    }

    // todo - if error

    return (
        <div className='h-screen relative -mx-[1.125rem] md:px-[1.125rem] md:h-full lg:static lg:flex lg:flex-col lg:gap-5'>

            {/* Add Helmet for dynamic meta tags */}
            <Helmet>
                <title>{capitalizeWords(post?.title)}</title>
                <meta property="og:title" content={capitalizeWords(post?.title)} />
                {/* //fixme - needs to be generating a description */}
                <meta property="og:description" content={post?.description || "Explore tech stories from CodeLand—where developers, innovation, and code meet. Stay inspired!"} />
                {/* //fixme - set default image as the logo if post is video or audio (non image) */}
                <meta property="og:image" content={post?.primaryMedia.url || "https://thecodechronicle.vercel.app/default-image.jpg"} />
                <meta property="og:url" content={`https://thecodechronicle.vercel.app/story/${post?.slugTitle}`} />
            </Helmet>

            <div className='fixed h-1/2 w-full md:sticky md:top-[6.75rem] md:h-64 lg:h-72 lg:sticky lg:top-[6.75rem]'>
                <StoryHeader post={post} />
            </div>
            <div className="absolute top-1/2 -mt-10 w-screen md:w-full md:sticky md:top-[5rem] lg:static lg:mt-0">
                <StoryBody post={post} />
            </div>
            <StoryComments />
        </div>
    )
}

export default Story