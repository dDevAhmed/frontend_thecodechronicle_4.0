import React from 'react'
import { Link } from "react-router-dom";
import { TbSmartHome, TbCompass, TbArticle, TbBookmark, TbLogout, TbUser, TbThumbUp, TbShare, TbShare2 } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const navigation = [
    { name: 'home', href: '/', icon: TbSmartHome, current: false },
    { name: 'explore', href: '/explore', icon: TbCompass, current: false },
    { name: 'blogs', href: '/blogs', icon: TbArticle, current: false },
    { name: 'saved', href: '/saved', icon: TbBookmark, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DesktopNavigation = () => {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className={classNames(
                                        location.pathname === item.href
                                            ? 'bg-brand-primary-blue text-brand-primary-white'
                                            : 'text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue hover:bg-opacity-70',
                                        'group flex items-center justify-between rounded-md p-2 text-sm font-semibold leading-6 capitalize',
                                    )}
                                >
                                    <span className='flex items-center gap-x-3'>
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                location.pathname === item.href ? 'text-brand-primary-white' : 'text-brand-primary-black group-hover:text-brand-primary-blue ',
                                                'h-6 w-auto shrink-0',
                                            )}
                                        />
                                        {item.name}
                                    </span>
                                    {/* //todo - show only if notification for blog  */}
                                    {/* <GoDotFill className={`h-5 w-auto text-red-500 hidden ${item.name === 'blogs' && 'block'}`} /> */}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="mt-auto border-t">
                    <Link
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue"
                    >
                        <TbLogout
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0 text-brand-primary-black group-hover:text-brand-primary-blue"
                        />
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNavigation