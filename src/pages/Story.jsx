import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StoryHeader from '../components/story/StoryHeader'
import StoryBody from '../components/story/StoryBody'
import StoryComments from '../components/story/StoryComments'
import Spinner from '../ui/Spinner';
import { useStory } from '../services/StoryService';

const Story = () => {
    // always land at the top of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    const { slugTitle } = useParams()

    const { data: post, isPending, isError } = useStory(slugTitle)

    if (isPending) {
        return <div className='flex items-center justify-center p-10'><Spinner /></div>;
    }

    return (
        <div className='h-screen relative -mx-[1.125rem] md:px-[1.125rem] md:h-full lg:static lg:flex lg:flex-col lg:gap-5'>
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