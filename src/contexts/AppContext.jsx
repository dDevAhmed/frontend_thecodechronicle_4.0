/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const { data, isLoading, error } = useWeather()

    const [showComingSoonModal, setShowComingSoonModal] = useState(false)

    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)

    const [searchBarQuery, setSearchBarQuery] = useState('')
    const [showMobileSearchModal, setShowMobileSearchModal] = useState(false)     //for mobile nav search icon
    const [showMobileSearchResults, setShowMobileSearchResults] = useState(false)
    const [showMediumLargeSearchResults, setShowMediumLargeSearchResults] = useState(false)     //for tab and desktop

    // explore page
    const [initiateExploreSearch, setInitiateExploreSearch] = useState(false)
    // saved page
    const [initiateSavedSearch, setInitiateSavedSearch] = useState(false)

    return (
        <AppContext.Provider value={{
            showComingSoonModal, setShowComingSoonModal,

            openMobileDrawer, setOpenMobileDrawer,

            searchBarQuery, setSearchBarQuery,
            showMobileSearchModal, setShowMobileSearchModal,
            showMobileSearchResults, setShowMobileSearchResults,
            showMediumLargeSearchResults, setShowMediumLargeSearchResults,

            initiateExploreSearch, setInitiateExploreSearch,

            initiateSavedSearch, setInitiateSavedSearch,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;