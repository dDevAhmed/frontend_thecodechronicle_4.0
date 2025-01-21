import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { capitalizeWords } from '../../utils/capitalize'
import { IoChevronBack } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { getTimeAgo } from '../../utils/time';
import PostImage from '../../assets/images/city_skyline_2.jpg'
import Button from '../../ui/Button';
import Pill from '../../ui/Pill';

const StoryHeader = ({ post }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  const timeAgo = getTimeAgo(post?.createdAt);

  return (
    // fixme - use default image if no primaryMedia/coverImage
    <div className="h-full w-full bg-cover bg-no-repeat bg-center bg-fixed p-5 pb-14 lg:pb-5 relative flex flex-col md:rounded-t-2xl" style={{ backgroundImage: `url(${post?.primaryMedia.url ? post?.primaryMedia.url : PostImage})` }}>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-700 to-transparent"></div>

      <div className="flex items-center justify-between">
        <Button onClick={handleGoBack} classNames={"bg-white rounded-full px-2 py-2"}><IoChevronBack className='h-5 w-auto' /></Button>
        <Button classNames={"bg-white rounded-full px-2 py-2"}><IoMdMore className='h-5 w-auto' /></Button>
      </div>

      <div className="flex-1 flex items-end z-10">
        <div className='flex flex-col gap-3'>
          <Link to={`/category/${post?.category.name}`}>
            <Pill text={post?.category.name} classNames={'bg-white text-[.875rem]'} />
          </Link>
          <h3 className='font-semibold text-2xl text-white'>{capitalizeWords(post?.title)}</h3>
          <p className='text-sm text-white'>{timeAgo}</p>
        </div>
      </div>
    </div>

  )
}

export default StoryHeader