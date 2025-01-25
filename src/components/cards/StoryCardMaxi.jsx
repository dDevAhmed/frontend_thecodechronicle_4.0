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
import slugify from 'slugify';

const StoryCardMaxi = ({ post }) => {

  // todo - move storymaxi and mini to story folder in components

  const timeAgo = getTimeAgo(post.createdAt);
  const sanitizedMessage = DOMPurify.sanitize(post?.message);
  const slug = slugify(post.title, { lower: true });

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
          to={`/story/${post.id}/${slug}`}
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
              to={`/story/${post.id}/${slug}`}
              className="text-blue-600 underline"
            >
              Read More
            </Link>
          )
        }
      </div>

      {/* handle different media types */}
      {/* if post is image
          cover image = primary media
          if no secondary media ? single image : gallery view */}

      {/* {
        post.type === 'audio'
          ? <StoryCardAudioView post={post} />
          : post.type === 'image'
            ? <div className="h-[25vh] w-full bg-cover bg-no-repeat bg-center rounded-lg lg:h-[35vh]" style={{ backgroundImage: `url(${post.primaryMedia.url})` }}></div>
            : post.type === 'video'
              ? <StoryCardVideoView post={post} />   //refactor, aspect ratio - 16/9
              : post.type === 'imageGallery'
              && <StoryCardImageGalleryView post={post} />
      } */}

      <StoryCardActions classNames={'justify-center'} />
    </Card>
  )
}

export default StoryCardMaxi