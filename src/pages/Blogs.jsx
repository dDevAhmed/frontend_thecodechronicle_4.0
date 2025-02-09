import { useContext } from 'react'
import Categories from '../components/Categories'
// import Card from '../ui/Card';
// import SearchBar from '../ui/SearchBar';
// import StoryCardMini from '../components/cards/StoryCardMini';
import PageTitle from '../ui/PageTitle';
import AppContext from '../contexts/AppContext';
import BlogCard from '../components/cards/BlogCard';

const Blogs = () => {
    // fixme - not a good approach - land at the top by default
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const { initiateExploreSearch } = useContext(AppContext);

    return (
        <div className='flex flex-col gap-5 pb-20'>

            {/* fix for medium, large screen */}
            <div>
                <PageTitle>Blogs</PageTitle>

                <p className='text-sm text-gray-700'>Insights, experiences, and tech tales from the citizens of CodeLand. Stay curious, keep building, and never stop learning!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <BlogCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default Blogs