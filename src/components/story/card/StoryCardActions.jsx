/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Button from '../../../ui/Button'
import { PiBookmarkSimpleLight, PiShareFatLight, PiThumbsUp } from 'react-icons/pi'
import AppContext from '../../../contexts/AppContext';
import StoryContext from '../../../contexts/StoryContext';

const StoryCardActions = ({ post, classNames }) => {

    const {
        showComingSoonModal, setShowComingSoonModal
    } = useContext(AppContext);

    const {
        likePost, setLikePost,
        bookmarkPost, setBookmarkPost
    } = useContext(StoryContext);

    const handleLikeButtonClicked = () => {
        // increment post like count
        // set post like state
        setLikePost(!likePost);
    }

    const handleBookmarkButtonClicked = () => {
        // set bookmark state
        setBookmarkPost(!bookmarkPost);
    }

    return (
        <div className={`flex items-center justify-center lg:justify-end gap-3 ${classNames}`}>
            <Button classNames={`text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray ${likePost && 'bg-brand-primary-blue text-white hover:text-brand-primary-white hover:bg-brand-primary-blue'}`} title={'save'} onClick={handleLikeButtonClicked}>
                <PiThumbsUp className='h-5 w-auto' />
                {likePost ? 'Liked' : 'Like'}
            </Button>
            <Button classNames={`text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray ${bookmarkPost && 'bg-brand-primary-blue text-white hover:text-brand-primary-white hover:bg-brand-primary-blue'}`} title={'save'} onClick={handleBookmarkButtonClicked}>
                <PiBookmarkSimpleLight className='h-5 w-auto' />
                {bookmarkPost ? 'Bookmarked' : 'Bookmark'}
            </Button>
            <Button classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray'} title={'share'} onClick={() => setShowComingSoonModal(true)}>
                <PiShareFatLight className='h-5 w-auto' />
                Share
            </Button>
        </div>
    )
}

export default StoryCardActions