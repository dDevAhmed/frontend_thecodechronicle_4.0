// import { useContext } from 'react'
// import { LiaTimesSolid } from "react-icons/lia";
// import { CiSearch } from "react-icons/ci";
import { TfiSearch } from "react-icons/tfi";

export default function SearchBar({ placeholder, classNames }) {
    // const { setSearchBarVisible, searchQuery, setSearchQuery } = useContext(AppContext)

    return (
        <div className={`w-full flex items-center gap-2 rounded-md px-3 ${classNames}`}>
            <TfiSearch className='h-5 w-auto text-gray-400' />

            <input
                id="searchbar"
                name="searchbar"
                type="text"
                placeholder={placeholder}
                aria-describedby="searchbar-search"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 bg-transparent"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            // autoFocus
            />

            {/* //fixme - show if more than 2 characters*/}
            {/* <Button classNames={'hover:text-red-500'} onClick={() => handleCloseButton()}>
                <LiaTimesSolid className='h-4 w-auto' title='close' />
            </Button> */}
        </div>
    )
}
