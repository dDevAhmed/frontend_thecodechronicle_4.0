import React, { useContext } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { TbSend2 } from 'react-icons/tb'
import Modal from '../../ui/Modal'
import Button from '../../ui/Button'
import StoryCommentItem from './StoryCommentItem';
import StoryContext from '../../contexts/StoryContext';

const StoryComments = () => {
    // use storyCommentMutation
    const {
        showStoryCommentsModal, setShowStoryCommentsModal,
        showStoryCommentSendButton, setShowStoryCommentSendButton
    } = useContext(StoryContext)

    const handleStoryCommentInputChange = (e) => {
        // setPostCommentQuery(e.target.value);
        if (e.target.value.length > 1) {
            setShowStoryCommentSendButton(true)
        } else {
            setShowStoryCommentSendButton(false)
        }
    }

    return (
        <Modal showModal={showStoryCommentsModal} setShowModal={setShowStoryCommentsModal}>
            <div className='p-5 text-gray-500 overflow-y-auto flex flex-col gap-5 max-h-screen'>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold text-lg'>125 Comments</p>
                    <Button classNames={'text-gray-500'}
                        onClick={() => setShowStoryCommentsModal(false)}
                    >
                        <LiaTimesSolid className='h-5 w-auto' title='close' />
                    </Button>
                </div>

                {/* //fixme - map through comment */}
                <div className='h-[70vh] overflow-y-auto flex flex-col gap-5'>
                    {
                        [1, 2, 3, 4, 5].map((comment, index) => (
                            <StoryCommentItem key={index} />
                        ))
                    }
                </div>

                <div className="w-full flex items-center rounded-full bg-white px-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-grey-900">
                    <input
                        id="comment"
                        name="comment"
                        type="text"
                        placeholder="write a comment"
                        aria-describedby="comment-search"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        // value={postCommentQuery}
                        onChange={(e) => handleStoryCommentInputChange(e)}
                    />
                    {
                        showStoryCommentSendButton
                        &&
                        <Button classNames={'hover:text-red-500'}
                        //  onClick={() => handleSendPostComment()}
                        >
                            <TbSend2 className='h-5 w-auto' title='send' />
                        </Button>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default StoryComments