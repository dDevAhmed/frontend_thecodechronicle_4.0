'use client'

import { Outlet, useLocation } from "react-router-dom";
import MobileDrawer from '../components/layout/MobileDrawer';
import Header from '../components/layout/Header';
import MobileNav from '../components/layout/MobileNav'
import Card from "../ui/Card";
import TrendingTopics from "../components/trendingtopics/TrendingTopics";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import DesktopNavigation from "../components/layout/DesktopNavigation";
import MobileSearchModal from "../components/modals/MobileSearchModal";
import AuthModal from "../components/modals/auth/AuthModal";
import ComingSoon from "../components/modals/ComingSoon";
import AboutTermsPrivacy from "../components/layout/AboutTermsPrivacy";

export default function Layout() {
    const location = useLocation()

    const isNewsOrBlogPage = (pathname) => {
        return pathname.startsWith('/story')
        // || pathname.startsWith('/blog');
    };

    return (
        <div className='w-full'>
            <ComingSoon />

            <MobileDrawer />

            <div className={`${isNewsOrBlogPage(location.pathname) && 'hidden md:flex'} sticky top-0 z-40`}>
                <Header />
            </div>

            <AuthModal />

            <MobileSearchModal />

            <div className="flex gap-5 w-full items-start bg-brand-background-gray px-[1.125rem] md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
                <aside className="sticky top-[6.75rem] hidden md:flex md:flex-col md:h-[80vh] overflow-y-auto gap-5 md:col-span-1 lg:col-span-1 shrink-0">
                    <Card classNames={'overflow-y-auto p-5 bg-white rounded-2xl flex flex-col gap-y-5'}>
                        <DesktopNavigation />
                    </Card>

                    <div className="hidden md:block lg:hidden">
                        <Card classNames={'overflow-y-auto p-5 bg-white rounded-2xl'}>
                            <TrendingTopics />
                        </Card>
                    </div>

                    <div className="hidden md:block lg:hidden">
                        <Card classNames={'overflow-y-auto p-5 bg-white rounded-2xl'}>
                            <SubscribeNewsletter />
                        </Card>
                    </div>

                    <AboutTermsPrivacy />

                    {/* medium screen  */}
                    {/* navigation, trending topics, weather */}

                    {/* large screen */}
                    {/* navigation, UNDECIDED */}
                </aside>

                {/* flex-1 w-full lg:min-w-[40rem] */}
                <main className="pb-[1.125rem] min-h-screen w-full md:col-span-2 lg-col-span-2">
                    <div className=""><Outlet /></div>
                </main>

                <aside className="sticky top-[6.75rem] hidden w-full lg:col-span-1 shrink-0 lg:flex flex-col md:flex-row md:w-full md:gap-x-5 lg:flex-col gap-y-5">
                    <Card classNames={'overflow-y-auto p-5 bg-white rounded-2xl'}>
                        <TrendingTopics />
                    </Card>

                    <Card classNames={'overflow-y-auto p-5 bg-white rounded-2xl'}>
                        <SubscribeNewsletter />
                    </Card>
                </aside>
            </div>

            <div className='fixed bottom-0 w-full md:hidden z-40'>
                <MobileNav />
            </div>
        </div>
    )
}
