import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const { data, isLoading, error } = useWeather()

    const [showSignInModal, setShowSignInModal] = useState(false)
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)

    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [showPostCommentsModal, setShowPostCommentsModal] = useState(false);

    return (
        <AppContext.Provider value={{
            showSignInModal, setShowSignInModal,
            openMobileDrawer, setOpenMobileDrawer,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;