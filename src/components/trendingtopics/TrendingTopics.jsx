import React from 'react'
import CardTitle from '../../ui/CardTitle'
import TrendingTopicItem from './TrendingTopicItem'

const TrendingTopics = () => {

  const sampleTrending = [
    {
      topic: 'frontend',
      postCount: 57,
    },
    {
      topic: 'backend',
      postCount: 22,
    },
    {
      topic: 'ai',
      postCount: 57,
    },
    {
      topic: 'cloud computing',
      postCount: 22,
    },
    {
      topic: 'javascript developer',
      postCount: 57,
    },
  ]

  return (
    <div className='flex flex-col gap-2'>
      <CardTitle children={'Trending Topics'} />

      <div className='flex flex-col'>
        {
          sampleTrending.map((topic, index) => (
            <div key={index} className={`py-2 ${topic !== sampleTrending[sampleTrending.length - 1] && 'border-b'}`}>
              <TrendingTopicItem trending={topic} />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default TrendingTopics