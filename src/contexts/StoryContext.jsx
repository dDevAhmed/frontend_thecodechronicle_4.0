/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
    // explore page
    const [initiateExploreSearch, setInitiateExploreSearch] = useState(false)
    // story page
    const [showStoryCommentsModal, setShowStoryCommentsModal] = useState(false)
    const [showStoryCommentSendButton, setShowStoryCommentSendButton] = useState(false);

    return (
        <StoryContext.Provider value={{
            // data,
            // isLoading,
            // error,
            initiateExploreSearch, setInitiateExploreSearch,
            
            showStoryCommentsModal, setShowStoryCommentsModal,
            showStoryCommentSendButton, setShowStoryCommentSendButton,

        }}>
            {children}
        </StoryContext.Provider>
    );
};

export default StoryContext;