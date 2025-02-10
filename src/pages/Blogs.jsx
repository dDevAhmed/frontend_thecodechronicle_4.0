import { useEffect } from 'react'
import PageTitle from '../ui/PageTitle';
import AppContext from '../contexts/AppContext';
import BlogCard from '../components/cards/BlogCard';

// fixme - remove, use api data
import BlogImage from '../assets/to_remove/blog_image.webp'
import Baby from '../assets/to_remove/baby.jpg'
import Fullstack from '../assets/to_remove/fullstack.webp'
import Docs from '../assets/to_remove/docs.jpg'
import Laptop from '../assets/to_remove/laptop.png'
import Native from '../assets/to_remove/native.png'
import Writing from '../assets/to_remove/writing.jpg'
import Ethics from '../assets/to_remove/ethics.png'
import Dark from '../assets/to_remove/dark.webp'
import Typescript from '../assets/to_remove/typescript.jpg'
import Hamster from '../assets/to_remove/hamster.webp'
import Dorcas from '../assets/to_remove/dorcas.jpg'
import Mercy from '../assets/to_remove/mercy.jpg'
import Ruqayyat from '../assets/to_remove/ruqayyat.jpg'
import Onughuh from '../assets/to_remove/onughuh.jpg'
import Abdulmalik from '../assets/to_remove/abdulmalik.jpg'

const dummyBlogs = [
    {
        avatar: Dorcas,
        author: 'Dorcas',
        createdAt: '2024-11-07T10:00:00Z',
        title: 'Read the Docs: The End of ‘src’ Sharing!',
        image: Docs,
        category: 'frontend',
    },
    {
        avatar: Abdulmalik,
        author: 'Abdulmalik',
        createdAt: '2024-11-12T14:30:00Z',
        title: 'Mastering TypeScript the CodeLand Way',
        image: Typescript,
        category: 'backend',
    },
    {
        avatar: '',
        author: 'Ahmad Abdulkareen',
        createdAt: '2024-11-09T09:15:00Z',
        title: 'From Web to Mobile: CodeLand’s Road to React Native',
        image: Native,
        category: 'mobile',
    },
    {
        avatar: '',
        author: 'Fumbi',
        createdAt: '2024-11-18T08:45:00Z',
        title: 'The Art of Documentation: CodeLand’s Writing Mastery',
        image: Writing,
        category: 'performance',
    },
    {
        avatar: '',
        author: 'Fatima',
        createdAt: '2024-11-22T16:20:00Z',
        title: 'The Hamster’s Leap into Web3',
        image: Hamster,
        category: 'web3',
    },
    {
        avatar: Onughuh,
        author: 'Godwin Ameh',
        createdAt: '2024-11-06T11:10:00Z',
        title: 'Fullstack Odyssey: A CodeLand Explorer’s Guide',
        image: Fullstack,
        category: 'community',
    },
    {
        avatar: Mercy,
        author: 'Mercy',
        createdAt: '2024-11-14T13:50:00Z',
        title: 'CodeLand’s Guide to Work Ethics: The Do’s and Don’ts',
        image: Ethics,
        category: 'performance',
    },
    {
        avatar: Ruqayyat,
        author: 'Ruqayyat',
        createdAt: '2024-11-25T19:05:00Z',
        title: 'Baby Steps & Bug Fixes: Balancing Code & Cradles',
        image: Baby,
        category: 'community',
    },
    {
        avatar: '',
        author: 'Shamsu',
        createdAt: '2024-11-10T17:30:00Z',
        title: 'Laptops Fit for CodeLand Devs: A Buyer’s Guide',
        image: Laptop,
        category: 'tool',
    },
    {
        avatar: '',
        author: 'Divine',
        createdAt: '2024-11-28T15:40:00Z',
        title: 'Surviving Power Outages: The Developer’s Guide to Staying Charged',
        image: Dark,
        category: 'performance',
    },
];

const Blogs = () => {
    // always land at the top of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <div className='flex flex-col gap-5 pb-20'>

            {/* fix for medium, large screen */}
            <div>
                <PageTitle>Blogs</PageTitle>

                <p className='text-sm text-gray-700'>Insights, experiences, and tech tales from the citizens of CodeLand. Stay curious, keep building, and never stop learning!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {dummyBlogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default Blogs