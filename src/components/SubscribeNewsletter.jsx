import React, { useState } from 'react'
import { TbMail } from "react-icons/tb";
import CardTitle from '../ui/CardTitle'
import Button from '../ui/Button';

const SubscribeNewsletter = () => {
  const [moreThanTwo, setHasMoreThanTwo] = useState(false)

  return (
    <div className='flex flex-col gap-5'>
      <CardTitle>Subscribe to Newsletter</CardTitle>
      <div className='flex items-center gap-2 bg-gray-100 rounded-md px-3'>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter email"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 bg-transparent"
        />
        <Button onClick={''}>
          <TbMail className={`h-5 w-auto text-gray-400 ${moreThanTwo && 'bg-brand-primary-blue text-brand-primary-white'}`} />
        </Button>
      </div>
    </div>
  )
}

export default SubscribeNewsletter