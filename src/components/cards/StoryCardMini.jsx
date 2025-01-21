import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { capitalizeWords } from '../../utils/capitalize'
import { LuMic, LuImage, LuText, LuVideo, LuGalleryHorizontal } from "react-icons/lu";
import Card from '../../ui/Card'
import Pill from '../../ui/Pill';
// LuAudioLines

const renderMedia = (post) => {
  if (post.type === 'audio') {
    return post.coverImage ? (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg" style={{ backgroundImage: `url(${post.coverImage})` }}></div>
    ) : (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg bg-brand-background-gray flex items-center justify-center">
        <LuMic className="h-10 w-auto text-gray-400" />
      </div>
    );
  }

  if (post.type === 'image') {
    return post.primaryMedia.url ? (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg" style={{ backgroundImage: `url(${post.primaryMedia.url})` }} />
    ) : (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg bg-brand-background-gray flex items-center justify-center">
        <LuImage className="h-10 w-auto text-gray-400" />
      </div>
    );
  }

  if (post.type === 'text') {
    return post.coverImage ? (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg" style={{ backgroundImage: `url(${post.coverImage})` }}></div>
    ) : (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg bg-brand-background-gray flex items-center justify-center">
        <LuText className="h-10 w-auto text-gray-400" />
      </div>
    );
  }

  if (post.type === 'video') {
    return post.primaryMedia.url ? (
      post.isLinkedResource ? (
        <iframe
          className="w-full h-20 lg:h-28 rounded-lg"
          src={post.primaryMedia.url}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <video src={post.primaryMedia.url} className="w-full h-20 lg:h-28 object-cover cursor-pointer"
        // onClick={togglePlay}
        //  muted={isMuted} 
        />
      )) : (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg bg-brand-background-gray flex items-center justify-center">
        <LuVideo className="h-10 w-auto text-gray-400" />
      </div>
    )
  }

  if (post.type === 'imageGallery') {
    return post.primaryMedia.url ? (
      <div className={`rounded-lg relative h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${post.primaryMedia.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg cursor-pointer">
          {/* //todo - onclick view gallery */}
          <span className="text-white text-lg">+{post?.secondaryMedia.length}</span>
        </div>
      </div>
    ) : (
      <div className="h-20 lg:h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg bg-brand-background-gray flex items-center justify-center">
        <LuGalleryHorizontal className="h-10 w-auto text-gray-400" />
      </div>
    );
  }

  return null;
};

const StoryCardMini = ({ post }) => {

  return (
    <Card classNames={'bg-white p-2 rounded-2xl grid grid-cols-3 items-center justify-between gap-3'}>
      
      {
        renderMedia(post)
      }

      <div className='col-span-2 flex flex-col gap-2'>
        <span className='flex items-center justify-between gap-2'>
          <Link to={`/category/${post.category}`}>
            <Pill text={post.category} />
          </Link>
          {/* //todo - show hours (2 hours ago) if same day else show date (Nov 02 2024) */}
          <p className='text-xs text-gray-500'>2 hours ago</p>
        </span>

        <Link to={`/news/${post.id}`}
          className='font-semibold w-fit group-hover:underline line-clamp-2'>
          {capitalizeWords(post.title)}
        </Link>
      </div>

    </Card>
  )
}

export default StoryCardMini