import { Link } from 'react-router-dom'

const TrendingTopicItem = ({ trending }) => {

    return (
       <>
           <Link to={`/tag/${trending.topic.replace(' ', '')}`} className='font-medium text-sm'>#{trending.topic.replace(' ', '')}</Link>
           <p className='text-xs text-gray-500'>{trending.postCount} Posts</p>
       </>
    );
}

export default TrendingTopicItem