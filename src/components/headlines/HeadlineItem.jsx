/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { capitalizeWords } from '../../utils/capitalize'
import { getTimeAgo } from '../../utils/time';
import Card from '../../ui/Card'
import PostImage from '../../assets/images/city_skyline_1.jpg'
import Pill from '../../ui/Pill';
const HeadlineItem = ({ headline }) => {

  const timeAgo = getTimeAgo(headline.createdAt);

  return (
    <Card classNames={'rounded-2xl w-full'}>
      <div className={'h-[50vh] md:h-[50vh] lg:h-[40vh] w-full rounded-2xl flex flex-col justify-end gap-5 bg-cover bg-no-repeat bg-center p-5 lg:p-3'} style={{
        backgroundImage: `url(${headline?.primaryMedia.url && headline?.type === 'image' ? headline?.primaryMedia.url : PostImage})`
      }}>

        <div className="rounded-xl bg-white p-5">
          <Link
            to={`/story/${headline.slugTitle}`}
            className='font-semibold text-xl w-fit line-clamp-3'>
            {capitalizeWords(headline.title)}
          </Link>

          <span className='flex items-center justify-between gap-2 mt-2'>
            <Link to={`/category/${headline?.category?.name}`}>
              <Pill text={headline?.category?.name} />
            </Link>
            {/* //fixme - shorter date here */}
            {/* <p className='text-xs text-gray-500'>{timeAgo}</p> */}
          </span >
        </div>

      </div>
    </Card>
  )
}

export default HeadlineItem