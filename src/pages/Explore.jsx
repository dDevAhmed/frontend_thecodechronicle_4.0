// import React, { useEffect, useState } from 'react'
// import Categories from '../components/Categories'
// import { newsData } from '../data/data';    //fixme - remove after use
// import Card from '../ui/Card';
// import SearchBar from '../ui/SearchBar';
// import StoryCardMini from '../components/cards/StoryCardMini';
// import PageTitle from '../ui/PageTitle';

// const Explore = () => {

//   const { headline, feed } = newsData

//   const [searchInitiated, setSearchInitiated] = useState(false)

//   return (
//     <div className='flex flex-col gap-5 pb-20'>

//       <PageTitle children={'Explore'} />

//       <Categories />

//       {/* //todo - only show if search is initiated */}
//       <div className={`flex items-center justify-between ${!searchInitiated && 'hidden'}`}>
//         <p className='font-medium text-brand-primary-black'>Search Results</p>
//         <p className='font-medium text-brand-primary-blue'>254 Founds</p>
//       </div>

//       {/* filtered post */}
//       {
//         feed.map((newsPost, index) => (
//           <StoryCardMini key={index} post={newsPost} />
//         ))
//       }
//     </div>
//   )
// }

// export default Explore