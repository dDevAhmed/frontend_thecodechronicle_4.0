import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const AboutTermsPrivacy = () => {
    return (
        <div className='fixed bottom-5 flex items-center gap-3'>
            <Link to={''} className='text-sm'>About</Link>
            <GoDotFill className='h-2 w-auto text-gray-600' />
            <Link to={''} className='text-sm'>Terms</Link>
            <GoDotFill className='h-2 w-auto text-gray-600' />
            <Link to={''} className='text-sm'>Privacy</Link>
        </div>
    )
}

export default AboutTermsPrivacy