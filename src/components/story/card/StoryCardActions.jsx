import React from 'react'
import Button from '../../../ui/Button'
import { PiBookmarkSimpleLight, PiShareFatLight, PiThumbsUp } from 'react-icons/pi'

const StoryCardActions = ({ classNames }) => {

    // todos 
    // change bookmark state
    // share logic

    return (
        <div className={`flex items-center justify-center lg:justify-end gap-3 ${classNames}`}>
            <Button classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray'} title={'save'} onClick={''}>
                <PiThumbsUp className='h-5 w-auto' />
                Like
            </Button>
            <Button classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray'} title={'save'} onClick={''}>
                <PiBookmarkSimpleLight className='h-5 w-auto' />
                Bookmark
            </Button>
            <Button classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600 hover:bg-brand-background-gray'} title={'share'} onClick={''}>
                <PiShareFatLight className='h-5 w-auto' />
                Share
            </Button>
        </div>
    )
}

export default StoryCardActions