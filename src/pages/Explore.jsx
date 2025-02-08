import { useContext } from 'react'
import Categories from '../components/Categories'
// import Card from '../ui/Card';
// import SearchBar from '../ui/SearchBar';
// import StoryCardMini from '../components/cards/StoryCardMini';
import PageTitle from '../ui/PageTitle';
import AppContext from '../contexts/AppContext';

const Explore = () => {
    // fixme - not a good approach - land at the top by default
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { initiateExploreSearch } = useContext(AppContext);

    return (
        <div className='flex flex-col gap-5 pb-20'>

            <PageTitle>Explore</PageTitle>

            <Categories />

            {/* //todo - only show if search is initiated */}
            <div className={`flex items-center justify-between ${!initiateExploreSearch && 'hidden'}`}>
                <p className='font-medium text-brand-primary-black'>Search Results</p>
                <p className='font-medium text-brand-primary-blue'>254 Founds</p>
            </div>

            {/* returns search filtered post */}
            {/* {
                feed.map((newsPost, index) => (
                    <StoryCardMini key={index} post={newsPost} />
                ))
            } */}
        </div>
    )
}

export default Explore