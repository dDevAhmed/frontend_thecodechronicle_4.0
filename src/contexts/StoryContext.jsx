/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
    // story page
    const [showStoryCommentsModal, setShowStoryCommentsModal] = useState(false)
    const [showStoryCommentSendButton, setShowStoryCommentSendButton] = useState(false);

    // story
    const [likedPosts, setLikedPosts] = useState(new Map()); // Map<postId, boolean>
    const [bookmarkedPosts, setBookmarkedPosts] = useState(new Map()); // Map<postId, boolean>

    const toggleLikePost = (postId) => {
        setLikedPosts((prev) => {
            const newLikedPosts = new Map(prev);
            newLikedPosts.set(postId, !prev.get(postId)); // Toggle like state
            return newLikedPosts;
        });
    };

    const toggleBookmarkPost = (postId) => {
        setBookmarkedPosts((prev) => {
            const newBookmarkedPosts = new Map(prev);
            newBookmarkedPosts.set(postId, !prev.get(postId)); // Toggle bookmark state
            return newBookmarkedPosts;
        });
    };

    return (
        <StoryContext.Provider value={{
            // data,
            // isLoading,
            // error,

            showStoryCommentsModal, setShowStoryCommentsModal,
            showStoryCommentSendButton, setShowStoryCommentSendButton,

            likedPosts,
            bookmarkedPosts,
            toggleLikePost,
            toggleBookmarkPost,

        }}>
            {children}
        </StoryContext.Provider>
    );
};

export default StoryContext;