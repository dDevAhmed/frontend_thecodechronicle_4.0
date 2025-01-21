import { useState, createContext, useEffect } from 'react';
import useStoryHook from '../hooks/useStoryHook';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
    const [showStoryCommentsModal, setShowStoryCommentsModal] = useState(false)
    const [showStoryCommentSendButton, setShowStoryCommentSendButton] = useState(false);

    return (
        <StoryContext.Provider value={{
            // data,
            // isLoading,
            // error,

            showStoryCommentsModal, setShowStoryCommentsModal,
            showStoryCommentSendButton, setShowStoryCommentSendButton,

        }}>
            {children}
        </StoryContext.Provider>
    );
};

export default StoryContext;