import { useContext } from 'react'
import Card from '../../ui/Card'
import { TbSmartHome, TbBookmark, TbUser, TbThumbUp, TbShare, TbSearch, TbCompass } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import AppContext from '../../contexts/AppContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MobileNav = () => {

  const { setShowAuthModal } = useContext(AuthContext)
  const { setShowMobileSearchModal } = useContext(AppContext)

  // todos 
  // change like post state
  // first check if user is auth ? like post : show modal asking user to login and like post
  // if user clicks on sign up/in carry location pathname as payload, 
  // user get authed and return to pathname in the payload, and post liked
  // share logic
  // open share medium 
  // hide home, breaking, explore in post/blog pages

  const location = useLocation()

  const handleLikePost = () => {
    alert('Thanks for the like')
  };

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

  const isNewsOrBlogPage = (pathname) => {
    return pathname.startsWith('/news') || pathname.startsWith('/blog');
  };

  const navigation = [
    { name: 'like', href: '', icon: TbThumbUp, current: false, visible: isNewsOrBlogPage(location.pathname), onclick: handleLikePost },
    { name: 'share', href: '', icon: TbShare, current: false, visible: isNewsOrBlogPage(location.pathname), onclick: handleSharePost },
    { name: 'home', href: '/', icon: TbSmartHome, current: false, visible: !isNewsOrBlogPage(location.pathname) },
    { name: 'explore', href: '/explore', icon: TbCompass, current: false, visible: !isNewsOrBlogPage(location.pathname) },
    { name: 'search', href: '', icon: TbSearch, current: false, visible: !isNewsOrBlogPage(location.pathname), onclick: handleSearch },
    { name: 'saved', href: '/saved', icon: TbBookmark, current: false, visible: true },
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