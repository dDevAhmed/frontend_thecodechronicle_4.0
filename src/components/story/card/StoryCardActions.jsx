/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Button from '../../../ui/Button';
import { PiBookmarkSimpleLight, PiShareFatLight, PiThumbsUp } from 'react-icons/pi';
import AppContext from '../../../contexts/AppContext';
import { StoryContext } from '../../../contexts/StoryContext'; // Import the updated context
import touchSoundFile from '../../../assets/sounds/pop-2.mp3';

const StoryCardActions = ({ post, classNames }) => {
    const touchSound = new Audio(touchSoundFile);

    const { setShowComingSoonModal } = useContext(AppContext);
    const { likedPosts, bookmarkedPosts, toggleLikePost, toggleBookmarkPost } = useContext(StoryContext);

    const isLiked = likedPosts.get(post.id) || false; // Check if the post is liked
    const isBookmarked = bookmarkedPosts.get(post.id) || false; // Check if the post is bookmarked

    const handleLikeButtonClicked = () => {
        toggleLikePost(post.id); // Toggle like state for this post
        !isLiked && (
            touchSound.play()
                .catch((error) => {
                    console.error('Failed to play sound:', error);
                })
        )
    };

    const handleBookmarkButtonClicked = () => {
        toggleBookmarkPost(post.id); // Toggle bookmark state for this post
        !isBookmarked && (
            touchSound.play()
                .catch((error) => {
                    console.error('Failed to play sound:', error);
                })
        )
    };

    return (
        <div className={`flex items-center justify-center lg:justify-end gap-3 ${classNames}`}>
            <Button
                classNames={`text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray ${isLiked && 'bg-brand-primary-blue text-white hover:text-brand-primary-white hover:bg-brand-primary-blue'}`}
                title={'save'}
                onClick={handleLikeButtonClicked}
            >
                <PiThumbsUp className='h-5 w-auto' />
                {isLiked ? 'Liked' : 'Like'}
            </Button>
            <Button
                classNames={`text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray ${isBookmarked && 'bg-brand-primary-blue text-white hover:text-brand-primary-white hover:bg-brand-primary-blue'}`}
                title={'save'}
                onClick={handleBookmarkButtonClicked}
            >
                <PiBookmarkSimpleLight className='h-5 w-auto' />
                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </Button>
            <Button
                classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray'}
                title={'share'}
                onClick={() => setShowComingSoonModal(true)}
            >
                <PiShareFatLight className='h-5 w-auto' />
                Share
            </Button>
        </div>
    );
};

export default StoryCardActions;