/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { capitalizeWords } from '../../utils/capitalize'
import { getTimeAgo } from '../../utils/time';
import Card from '../../ui/Card'
import Pill from '../../ui/Pill';
import Button from '../../ui/Button';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import { PiBookmarkSimpleLight, PiShareFatLight } from 'react-icons/pi';
import DefaultAvatar from '../../assets/images/default_avatar.png'
import BlogImage from '../../assets/to_remove/blog_image.webp'

const BlogCard = ({ blog }) => {

    const { setShowComingSoonModal } = useContext(AppContext);

    const timeAgo = getTimeAgo(blog.createdAt);

    // todo - remove and use timeAgo above
    const formatDate = (isoString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(isoString).toLocaleDateString('en-US', options);
    }

    return (
        <Card classNames={'rounded-2xl w-full p-5 bg-white'}>
            <div className={'w-full rounded-2xl flex flex-col justify-between gap-5'}>
                <div className='flex items-start gap-3'>
                    <Link to={''}><img src={blog.avatar || DefaultAvatar} alt="Author Image" className='h-10 w-10 rounded-full' /></Link>
                    <div className='flex flex-col justify-between'>
                        <Link
                            // to={`/author/${blog.slugTitle}`}
                            to={''}
                            className='text-sm font-bold text-gray-700'>
                            {capitalizeWords(blog.author)}
                        </Link>
                        <p className='text-sm text-gray-700'>{formatDate(blog.createdAt)}</p>
                    </div>
                </div>

                <Link
                    // to={`/story/${blog.slugTitle}`}
                    to={''}
                    className='font-semibold text-lg w-fit line-clamp-3 text-gray-900'>
                    {capitalizeWords(blog.title)}
                </Link>

                {/* <img className="aspect-16/9 rounded-lg object-cover h-10" src={post?.primaryMedia?.url} /> */}
                <img className="aspect-16/9 rounded-lg object-cover bg-white h-44" src={blog.image || BlogImage} />

                <div className='flex items-center justify-between'>
                    <Link
                        // to={`/category/${blog?.category?.name}`}
                        to={''}
                    >
                        <Pill text={blog?.category} />
                    </Link>
                    <span className='flex items-center justify-between gap-3'>
                        <Button
                            // classNames={`text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray ${isBookmarked && 'bg-brand-primary-blue text-white hover:text-brand-primary-white hover:bg-brand-primary-blue'}`}
                            classNames={`group text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray`}
                            title={'save'}
                            onClick={() => setShowComingSoonModal(true)}
                        >
                            <PiBookmarkSimpleLight className='h-5 w-auto' />
                            {/* {isBookmarked ? 'Bookmarked' : 'Bookmark'} */}
                            <span className='hidden lg:group-hover:block'>
                                Bookmark
                            </span>
                        </Button>
                        <Button
                            classNames={'group text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray'}
                            title={'share'}
                            onClick={() => setShowComingSoonModal(true)}
                        >
                            <PiShareFatLight className='h-5 w-auto' />
                            <span className='hidden lg:group-hover:block'>
                                Share
                            </span>
                        </Button>
                    </span>
                </div>
            </div>
        </Card>
    )
}

export default BlogCard