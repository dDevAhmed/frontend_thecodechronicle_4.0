/* eslint-disable no-unused-vars */
import Card from '../ui/Card';
import SearchBar from '../ui/SearchBar';
// import StoryCardMini from '../components/cards/StoryCardMini';
import PageTitle from '../ui/PageTitle';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

const Saved = () => {
  // always land at the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const { initiateSavedSearch, setInitiateSavedSearch } = useContext(AppContext)
  const [savedSearchBarQuery, setSavedSearchBarQuery] = useState('');

  return (
    <div className='flex flex-col gap-5 pb-20'>

      <PageTitle>Saved</PageTitle>

      <Card classNames={'p-1 bg-white rounded-2xl'}>
        <SearchBar placeholder={'Search from saved posts'} state={true} setState={setInitiateSavedSearch}
          searchBarQuery={savedSearchBarQuery}
          setSearchBarQuery={setSavedSearchBarQuery} />
      </Card>

      {/* //todo - only show if search is initiated */}
      <div className={`flex items-center justify-between ${!initiateSavedSearch && 'hidden'}`}>
        <p className='font-medium text-brand-primary-black'>Search Results</p>
        <p className='font-medium text-brand-primary-blue'>254 Founds</p>
      </div>

      {/* filtered post */}
      {/* {
        feed.map((newsPost, index) => (
          <StoryCardMini key={index} post={newsPost} />
        ))
      } */}
    </div>
  )
}

export default Saved