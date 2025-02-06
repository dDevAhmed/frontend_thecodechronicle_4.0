/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { capitalizeWords } from '../../utils/capitalize'
import { getTimeAgo } from '../../utils/time';
import Card from '../../ui/Card'
import Pill from '../../ui/Pill';
import StoryCardAudioView from '../story/card/StoryCardAudioView';
import StoryCardVideoView from '../story/card/StoryCardVideoView';
import StoryCardImageGalleryView from '../story/card/StoryCardImageGalleryView';
import StoryCardActions from '../story/card/StoryCardActions';
import DOMPurify from 'dompurify';

const StoryCardMaxi = ({ post }) => {

  // todo - move storymaxi and mini to story folder in components

  const timeAgo = getTimeAgo(post.createdAt);
  const sanitizedMessage = DOMPurify.sanitize(post?.message);

  return (
    <Card classNames={'bg-white p-5 rounded-2xl flex flex-col justify-between gap-5'}>
      <span className='flex items-center justify-between gap-2'>
        <Link to={`/category/${post?.category?.name}`}>
          <Pill text={post?.category?.name} />
        </Link>
        <p className='text-xs text-gray-500'>{timeAgo}</p>
      </span >

      <div className=''>
        <Link
          to={`/story/${post.slugTitle}`}
          className='font-semibold text-xl w-fit group-hover:underline'>
          {capitalizeWords(post.title)}
        </Link>

        <p className="line-clamp-2 text-gray-700 mt-2">
          {/* dangerouslySetInnerHTML is used to render html tags in react */}
          <p dangerouslySetInnerHTML={{ __html: sanitizedMessage }}></p>

        </p>
        {
          post.message && (
            <Link
              to={`/story/${post.slugTitle}`}
              className="text-blue-600 underline"
            >
              Read More
            </Link>
          )
        }
      </div>

      <>
        {post.type === 'text' ? null : null}

        {post.type === 'image' && post.secondaryMedia?.length > 1
          ? (
            // <div className="h-[25vh] w-full bg-cover bg-no-repeat bg-center rounded-lg lg:h-[35vh]" style={{ backgroundImage: `url(${post?.primaryMedia?.url})` }}></div>
            <StoryCardImageGalleryView post={post} />
          )
          : (
            <img className="aspect-16/9 rounded-lg object-cover" src={post?.primaryMedia?.url} />
          )
        }

        {post.type === 'audio' && (
          <StoryCardAudioView post={post} />
        )}

        {post.type === 'video' && (
          <StoryCardVideoView post={post} />
        )}

        {post?.primaryMedia?.credit && (
          <p className='-mt-3 text-sm text-gray-600 italic'>credit: {post?.primaryMedia?.credit}</p>
        )}
      </>

      <StoryCardActions classNames={'justify-center'} />
    </Card>
  )
}

export default StoryCardMaxi