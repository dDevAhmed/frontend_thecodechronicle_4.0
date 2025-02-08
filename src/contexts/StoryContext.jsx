/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
    // story page
    const [showStoryCommentsModal, setShowStoryCommentsModal] = useState(false)
    const [showStoryCommentSendButton, setShowStoryCommentSendButton] = useState(false);

    // story
    const [likePost, setLikePost] = useState(false);
    const [bookmarkPost, setBookmarkPost] = useState(false);

    return (
        <StoryContext.Provider value={{
            // data,
            // isLoading,
            // error,

            showStoryCommentsModal, setShowStoryCommentsModal,
            showStoryCommentSendButton, setShowStoryCommentSendButton,

            likePost, setLikePost,
            bookmarkPost, setBookmarkPost,

        }}>
            {children}
        </StoryContext.Provider>
    );
};

export default StoryContext;