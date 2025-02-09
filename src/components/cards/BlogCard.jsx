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
import AuthorAvatar from '../../assets/to_remove/author_avatar.jpg'
import BlogImage from '../../assets/to_remove/blog_image.webp'

const BlogCard = ({ blog }) => {
    // author name, avatar
    // blog title, category, image, date

    const { setShowComingSoonModal } = useContext(AppContext);

    // const timeAgo = getTimeAgo(blog.createdAt);

    return (
        <Card classNames={'rounded-2xl w-full p-5 bg-white'}>
            <div className={'w-full rounded-2xl flex flex-col justify-between gap-5'}>
                <div className='flex items-start gap-3'>
                    <Link to={''}><img src={AuthorAvatar} alt="Author Image" className='h-10 w-10 rounded-full' /></Link>
                    <div className='flex flex-col justify-between'>
                        <Link
                            // to={`/author/${blog.slugTitle}`}
                            to={''}
                            className='text-sm font-bold text-gray-700'>
                            {/* {capitalizeWords(blog.title)} */}
                            Author Name
                        </Link>
                        <p className='text-sm text-gray-700'>10/02/2025</p>
                    </div>
                </div>

                <Link
                    // to={`/story/${blog.slugTitle}`}
                    to={''}
                    className='font-semibold text-lg w-fit line-clamp-3 text-gray-900'>
                    {/* {capitalizeWords(blog.title)} */}
                    Surviving Power Outages: The Developer’s Guide to Staying Charged
                </Link>

                {/* <img className="aspect-16/9 rounded-lg object-cover h-10" src={post?.primaryMedia?.url} /> */}
                <img className="aspect-16/9 rounded-lg object-cover" src={BlogImage} />

                <div className='flex items-center justify-between'>
                    <Link
                        // to={`/category/${blog?.category?.name}`}
                        to={''}
                    >
                        {/* <Pill text={blog?.category?.name} /> */}
                        <Pill text={'frontend'} />
                    </Link>
                    <span className='flex items-center justify-between gap-3'>
                        <Button
                            // classNames={`text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray ${isBookmarked && 'bg-brand-primary-blue text-white hover:text-brand-primary-white hover:bg-brand-primary-blue'}`}
                            classNames={`group text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray`}
                            title={'save'}
                        // onClick={''}
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