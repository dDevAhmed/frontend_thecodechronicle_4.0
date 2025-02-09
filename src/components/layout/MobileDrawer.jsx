import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { TbLogout } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TbSmartHome, TbCompass, TbArticle, TbBookmark, TbUser, TbThumbUp, TbShare, TbShare2 } from "react-icons/tb";
import { HiOutlineFire } from "react-icons/hi";
import AppContext from '../../contexts/AppContext'
import AppLogo from '../../assets/images/TestLogo.png'
import useAuthStatusHook from '../../hooks/useAuthStatusHook';
import AboutTermsPrivacy from './AboutTermsPrivacy';
import Button from '../../ui/Button';
import AuthContext from '../../contexts/AuthContext';
import { privateRoute } from '../../utils/privateRoute';

const navigation = [
    { name: 'home', href: '/', icon: TbSmartHome, current: false },
    { name: 'blogs', href: '/blogs', icon: TbArticle, current: false },
    { name: 'saved', href: '/saved', icon: TbBookmark, current: false, private: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MobileDrawer = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const currentRoute = location.pathname.split('/')[1];

    const { loggedIn } = useAuthStatusHook();
    const {
        openMobileDrawer, setOpenMobileDrawer,
        intendedPath, setIntendedPath
    } = useContext(AppContext)
    const { logout, setShowAuthModal } = useContext(AuthContext)

    const handleNavigation = (href, isPrivate) => (e) => {
        if (isPrivate && !loggedIn) {
            e.preventDefault(); // Prevent default navigation
            setIntendedPath(href); // Store the intended path
            setShowAuthModal(true); // Show the auth modal
        } else {
            navigate(href); // Navigate to the intended path
            setOpenMobileDrawer(false)
        }
    };

    const handleLogout = () => {
        if (privateRoute(currentRoute)) {
            logout();
            navigate('/');
            setOpenMobileDrawer(false)
        }
        logout();
    };

    return (
        <Dialog open={openMobileDrawer} onClose={setOpenMobileDrawer} className="relative z-50 lg:hidden">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 flex">
                <DialogPanel
                    transition
                    className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                >
                    <TransitionChild>
                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                            <button type="button" onClick={() => setOpenMobileDrawer(false)} className="-m-2.5 p-2.5">
                                <span className="sr-only">Close sidebar</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                            </button>
                        </div>
                    </TransitionChild>

                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                alt="DashStack logo"
                                src={AppLogo}
                                className="h-8 w-auto"
                            />
                        </div>
                        <nav className="flex flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.href}
                                                    onClick={handleNavigation(item.href, item.private)} // Intercept click event
                                                    className={classNames(
                                                        location.pathname === item.href
                                                            ? 'bg-brand-primary-blue text-brand-primary-white'
                                                            : 'text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue hover:bg-opacity-70',
                                                        'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 capitalize',
                                                    )}
                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            location.pathname === item.href ? 'text-brand-primary-white' : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                                                            'h-6 w-auto shrink-0',
                                                        )}
                                                    />
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                {
                                    loggedIn && (
                                        <li className="mt-auto border-t">
                                            <Button
                                                onClick={handleLogout}
                                                classNames={"group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 capitalize text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue w-full"}
                                            >
                                                <TbLogout
                                                    aria-hidden="true"
                                                    className="h-6 w-6 shrink-0 text-brand-primary-black group-hover:text-brand-primary-blue"
                                                />
                                                Logout
                                            </Button>
                                        </li>
                                    )
                                }
                            </ul>
                        </nav>
                        <div className='flex-1'>
                            <AboutTermsPrivacy />
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default MobileDrawer