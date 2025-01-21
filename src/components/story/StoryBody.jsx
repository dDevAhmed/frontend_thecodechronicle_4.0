import React, { useContext } from 'react'
import { capitalizeWords } from '../../utils/capitalize'
import Button from '../../ui/Button';
import StoryContext from '../../contexts/StoryContext';
import StoryCardActions from './card/StoryCardActions'

const StoryBody = ({ post }) => {

  const { setShowStoryCommentsModal } = useContext(StoryContext)

  return (

    <div className='shadow-md h-[80vh] md:h-[75vh] md:rounded-b-2xl lg:h-[70vh]'>
      <div className="bg-white px-5 pb-20 md:pb-5 overflow-y-auto hide-scrollbar h-full rounded-t-2xl md:rounded-b-2xl lg:rounded-t-none z-20 text-gray-700 relative">
        <div className='bg-white w-full sticky top-0 flex items-center justify-center p-3'>
          <div className='w-1/5 h-1 bg-gray-400 rounded-md'></div>
        </div>

        {/* dangerouslySetInnerHTML is used to render html tags in react */}
        <p dangerouslySetInnerHTML={{ __html: post?.message }}></p>
        {/* <p>
          {post.message}
        </p> */}

        <div className='flex justify-center md:justify-between items-center mt-5'>
          <Button
            onClick={() => setShowStoryCommentsModal(true)}
            classNames={'border border-brand-primary-black text-brand-primary-black py-3 px-5 rounded-2xl text-[1rem]'}
          >
            125 comments
          </Button>
          <div className='hidden md:flex'><StoryCardActions /></div>
        </div>
      </div>
    </div>

  )
}

export default StoryBody