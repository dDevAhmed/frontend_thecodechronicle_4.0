import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineBell } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
// import { useWeather } from "../../services/Weather";
// import { weatherCondition } from "../../features/weather/weather";
import AppContext from "../../contexts/AppContext";
import AppLogo from '../../assets/images/TestLogo.png'
import Button from "../../ui/Button";
import SearchBar from '../../ui/SearchBar'
import Card from "../../ui/Card";

const Header = () => {
    const {
        setOpenMobileDrawer,
        showMediumLargeSearchResults, setShowMediumLargeSearchResults
    } = useContext(AppContext)

    const [headerSearchBarQuery, setHeaderSearchBarQuery] = useState('');

    return (
        <header className="bg-brand-background-gray shrink-0 p-[1.125rem] w-full">
            {/* //fixme - remove height and use padding instead */}
            <div className="bg-white rounded-2xl mx-auto flex gap-5 h-[4.5rem] items-center justify-between px-4 sm:px-6 lg:px-8 shadow">
                <div className='flex gap-5 items-center'>
                    <RxHamburgerMenu className='md:hidden' onClick={() => setOpenMobileDrawer(true)} />
                    <img
                        alt="Your Company"
                        src={AppLogo}
                        className="h-8 w-auto"
                    />
                </div>

                {/* a nice weather condition */}
                <div className='hidden lg:flex gap-3'>
                    {/* <img src={weatherIcon || weatherDefault} alt="weather icon" className='h-8 w-auto' /> */}

                    <span>
                        {/* <h3 className='text-3xl relative mt-2'>{weatherTemperature}<span className='absolute text-sm -top-1'>o</span><span className='ml-2'>c</span></h3> */}

                        {/* <p className='font-light'>{weatherCondition}</p> */}
                    </span>
                </div>

                <div className='hidden md:flex flex-1 relative'>
                    <SearchBar placeholder={'Search for something...'}
                        classNames={'bg-gray-100 w-full lg:w-2/3 m-auto'}
                        state={true} setState={setShowMediumLargeSearchResults}
                        searchBarQuery={headerSearchBarQuery}
                        setSearchBarQuery={setHeaderSearchBarQuery} />

                    <Card classNames={`bg-gray-100 rounded-b-2xl max-h-80 overflow-y-auto px-5 py-3 absolute top-10 left-1/2 transform -translate-x-1/2 w-full lg:w-2/3 theme-slider ${showMediumLargeSearchResults ? 'flex' : 'hidden'}`}>
                        {/* todo - if results ? show : no results for matched query */}
                        {/* //todo - create result item */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur a hic eveniet ea inventore quos repellendus ipsa repellat dolore maiores, eaque culpa consequatur possimus doloribus. Similique et excepturi consectetur fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptatem suscipit ducimus aliquam placeat officiis rem error, quidem provident obcaecati at necessitatibus molestias cum eaque nisi animi in voluptates? Est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam eveniet praesentium a repellendus ad omnis, amet et explicabo molestiae? Labore quos atque amet modi nostrum reiciendis corporis temporibus tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero odit doloremque eum quasi atque cumque. Error praesentium cumque quo aliquam assumenda. Fugit voluptatem, velit similique voluptatum inventore tenetur!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur a hic eveniet ea inventore quos repellendus ipsa repellat dolore maiores, eaque culpa consequatur possimus doloribus. Similique et excepturi consectetur fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptatem suscipit ducimus aliquam placeat officiis rem error, quidem provident obcaecati at necessitatibus molestias cum eaque nisi animi in voluptates? Est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam eveniet praesentium a repellendus ad omnis, amet et explicabo molestiae? Labore quos atque amet modi nostrum reiciendis corporis temporibus tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero odit doloremque eum quasi atque cumque. Error praesentium cumque quo aliquam assumenda. Fugit voluptatem, velit similique voluptatum inventore tenetur!
                    </Card>
                </div>

                <div className="flex items-center gap-x-2">
                    <Button classNames={'relative'}>
                        <HiOutlineBell className='h-8 w-auto text-gray-500' />
                        {/* //fixme - shown only if notification  */}
                        <GoDotFill className="h-5 w-auto absolute top-1 right-2 text-red-500" />
                    </Button>

                    <a href="#" className="hidden md:flex -m-1.5 p-1.5 items-center gap-2">
                        <span className="sr-only">Your profile</span>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="h-10 w-auto rounded-full bg-gray-800"
                        />
                        {/* <span className="hidden">
                            <p className='text-sm text-[#072635] font-semibold'>Dr. Jose Simmons</p>
                            <p className='text-sm text-[#707070]'>General Practitioner</p>
                        </span> */}
                    </a>
                    {/* <div className='w-[.0625rem] h-10 bg-[#EDEDED] hidden lg:block'></div>
                    <span className='items-center hidden lg:flex'>
                        <Button><img src={Settings} alt='settings' className='h-4 w-auto' /></Button>
                        <Button><img src={MoreVertical} alt='more' className='h-4 w-auto' /></Button>
                    </span> */}
                </div>
            </div>
        </header >
    )
}

export default Header