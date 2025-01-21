/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const { data, isLoading, error } = useWeather()

    // auth
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [showSignInForm, setShowSignInForm] = useState(true)      //to be the default view
    const [showRegisterEmailForm, setShowRegisterEmailForm] = useState(false)
    const [showVerifyEmailForm, setShowVerifyEmailForm] = useState(false)
    const [showSignUpForm, setShowSignUpForm] = useState(false)

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
            showAuthModal, setShowAuthModal,
            showSignInForm, setShowSignInForm,
            showRegisterEmailForm, setShowRegisterEmailForm,
            showVerifyEmailForm, setShowVerifyEmailForm,
            showSignUpForm, setShowSignUpForm,

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