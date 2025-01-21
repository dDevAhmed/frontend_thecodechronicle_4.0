/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const { data, isLoading, error } = useWeather()

    const [showSignInModal, setShowSignInModal] = useState(false)
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
    const [searchBarQuery, setSearchBarQuery] = useState('')

    // explore page
    const [initiateExploreSearch, setInitiateExploreSearch] = useState(false)
    // saved page
    const [initiateSavedSearch, setInitiateSavedSearch] = useState(false)
    
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [showPostCommentsModal, setShowPostCommentsModal] = useState(false);

    return (
        <AppContext.Provider value={{
            showSignInModal, setShowSignInModal,
            openMobileDrawer, setOpenMobileDrawer,
            searchBarQuery, setSearchBarQuery,

            initiateExploreSearch, setInitiateExploreSearch,
            initiateSavedSearch, setInitiateSavedSearch,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;