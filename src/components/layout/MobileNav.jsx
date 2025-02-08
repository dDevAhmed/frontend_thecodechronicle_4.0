import touchSoundFile from '../../assets/sounds/pop-2.mp3';

import { useContext, useCallback } from 'react'
import Card from '../../ui/Card'
import { TbSmartHome, TbBookmark, TbBookmarkFilled, TbUser, TbThumbUp, TbThumbUpFilled, TbShare, TbSearch, TbCompass } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import AppContext from '../../contexts/AppContext';
import StoryContext from '../../contexts/StoryContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MobileNav = () => {
  // todo - use params to get post id
  const location = useLocation()
  const navigate = useNavigate();

  const post = location.pathname.split('/')[2];
  // console.log('post', post)

  const { setShowAuthModal } = useContext(AuthContext) || {};
  const { setShowMobileSearchModal } = useContext(AppContext) || {};

  const {
    likePost, setLikePost,
    bookmarkPost, setBookmarkPost
  } = useContext(StoryContext) || {};

  const touchSound = new Audio(touchSoundFile);

  // todos 
  // change like post state
  // first check if user is auth ? like post : show modal asking user to login and like post
  // if user clicks on sign up/in carry location pathname as payload, 
  // user get authed and return to pathname in the payload, and post liked
  // share logic
  // open share medium 

  const handleLikePost = useCallback(() => {
    // Add logic to like the post to bookmarks (e.g., API call)
    setLikePost((prev) => !prev);
    // play touch sound
    touchSound.play()
      .catch((error) => {
        console.error('Failed to play sound:', error);
      });

  }, [setLikePost, touchSound]);

  const handleBookmarkPost = useCallback(() => {
    if (isStoryPage(location.pathname)) {
      setBookmarkPost((prev) => !prev);
      // Add logic to save the post to bookmarks (e.g., API call)
      // play touch sound
      touchSound.play()
        .catch((error) => {
          console.error('Failed to play sound:', error);
        });
    } else {
      navigate('/saved');
    }
  }, [location.pathname, setBookmarkPost, navigate, touchSound]);

  const handleSharePost = () => {
    alert('share post to benefit others');
  };

  const handleSearch = () => {
    setShowMobileSearchModal(true)
  };

  const handleGotoProfile = () => {
    // check if user is sign in, 
    // else open auth modal
    setShowAuthModal(true)    //todo - refine logic
  };

  const isStoryPage = (pathname) => {
    return pathname.startsWith('/story') || pathname.startsWith('/blog');
  };

  const navigation = [
    { name: 'like', href: '', icon: likePost ? TbThumbUpFilled : TbThumbUp, current: false, visible: isStoryPage(location.pathname), onclick: handleLikePost, liked: isStoryPage(location.pathname) && likePost },
    { name: 'home', href: '/', icon: TbSmartHome, current: false, visible: !isStoryPage(location.pathname) },
    { name: 'explore', href: '/explore', icon: TbCompass, current: false, visible: !isStoryPage(location.pathname) },
    { name: 'search', href: '', icon: TbSearch, current: false, visible: !isStoryPage(location.pathname), onclick: handleSearch },
    {
      name: 'saved', href: '/saved', icon: bookmarkPost ? TbBookmarkFilled : TbBookmark, current: false, visible: true, onclick: handleBookmarkPost, bookmarked: isStoryPage(location.pathname) && bookmarkPost,
    },
    { name: 'share', href: '', icon: TbShare, current: false, visible: isStoryPage(location.pathname), onclick: handleSharePost },
    { name: 'account', href: '', icon: TbUser, current: false, visible: true, onclick: handleGotoProfile },
  ];

  return (
    // fixme - add in mobile - w-[100vw]
    <Card classNames={'bg-white py-3 px-5 flex justify-between items-center gap-1 border border-t-brand-primary-blue'}>
      {navigation.map((item, index) => (
        item.visible && (item.onclick
          ?
          (
            <button key={index} onClick={item.onclick} className='flex items-center gap-x-3 rounded-full py-2 px-3 text-sm leading-6'>
              <item.icon
                aria-hidden="true"
                className={classNames(
                  location.pathname === item.href
                    //   ? 'text-brand-primary-blue'
                    //   : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                    // 'h-6 w-auto shrink-0',
                    ? 'text-brand-primary-blue'
                    : item.bookmarked || item.liked
                      ? 'text-brand-primary-blue'
                      : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                  'h-6 w-auto shrink-0',
                )}
              />
            </button>
          )
          :
          <Link
            key={index}
            to={item.href}
            className={
              classNames(
                'text-[#072635] hover:bg-[01F0D0]',
                `flex items-center gap-x-3 rounded-full py-2 px-3 text-sm leading-6 ${!item.visible && 'hidden'}`,
              )}
          >
            <item.icon
              aria-hidden="true"
              className={classNames(
                location.pathname === item.href
                  ? 'text-brand-primary-blue'
                  : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                'h-6 w-auto shrink-0',
              )}
            />
          </Link>)
      ))
      }
    </Card >
  )
}

export default MobileNav