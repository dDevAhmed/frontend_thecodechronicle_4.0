/* eslint-disable react/prop-types */
import { useContext } from 'react'
import Button from '../../ui/Button';
import StoryContext from '../../contexts/StoryContext';
import StoryCardActions from './card/StoryCardActions'
import DOMPurify from 'dompurify';
import StoryCardVideoView from './card/StoryCardVideoView';
import AppContext from '../../contexts/AppContext';
import GallerySlider from './GallerySlider';

const StoryBody = ({ post }) => {

  const { setShowComingSoonModal } = useContext(AppContext);
  const { setShowStoryCommentsModal } = useContext(StoryContext)
  const sanitizedMessage = DOMPurify.sanitize(post?.message);

  return (

    <div className='shadow-md h-[80vh] md:h-[75vh] md:rounded-b-2xl lg:h-[70vh]'>
      <div className="bg-white px-5 pb-20 md:pb-5 overflow-y-auto hide-scrollbar h-full rounded-t-2xl md:rounded-b-2xl lg:rounded-t-none z-20 text-gray-700 relative">
        <div className='bg-white w-full sticky top-0 flex items-center justify-center p-3'>
          <div className='w-1/12 h-1 bg-gray-900 rounded-md'></div>
        </div>

        {/* //todo - should be in the header like yt*/}
        {post?.type === 'video' && (
          <div className='mb-5'>
            <StoryCardVideoView post={post} />
          </div>
        )}

        {post?.type === 'image' && (
          post?.secondaryMedia.length > 1 && (
            <GallerySlider media={post?.secondaryMedia} />
          )
        )}

        {/* dangerouslySetInnerHTML is used to render html tags in react */}
        <p dangerouslySetInnerHTML={{ __html: sanitizedMessage }} className='text-justify'></p>

        <div className='flex justify-center md:justify-between items-center mt-5'>
          <Button
            onClick={() => setShowComingSoonModal(true)}
            classNames={'border border-brand-primary-black text-brand-primary-black py-3 px-5 rounded-2xl text-[1rem]'}
          >
            {/* //todo - show count if comments else comment */}
            125 comments
          </Button>
          <div className='hidden md:flex'><StoryCardActions post={post} /></div>
        </div>
      </div>
    </div>

  )
}

export default StoryBody