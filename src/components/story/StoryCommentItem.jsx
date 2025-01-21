import React from 'react'
import { TbThumbUp, TbMessageCircle, TbMessage } from "react-icons/tb";
import Button from '../../ui/Button';

const StoryCommentItem = () => {
    return (
        <div className='flex gap-5 bg-gray-100 p-5 rounded'>
            <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-14 rounded-full bg-gray-50"
            />
            <div className="text-base">
                <div className="flex justify-between items-center">
                    <p className='font-semibold text-gray-900'>Judith Black</p>
                    <p className='text-xs text-gray-500'>2 hours ago</p>
                </div>

                <div className="mt-1 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis dicta molestiae eligendi, porro totam praesentium harum beatae aliquid eveniet vitae dolore blanditiis assumenda atque explicabo? Repellat placeat minus tenetur!</div>

                <div className='flex items-center gap-3 mt-3'>
                    <Button classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600'} title={'like'} onClick={''}>
                        <TbThumbUp className='h-5 w-auto' />
                        30
                    </Button>
                    <Button classNames={'text-lg border rounded-2xl p-5 flex items-center gap-1 text-gray-600'} title={'reply'} onClick={''}>
                        <TbMessage className='h-5 w-auto' />
                        12
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default StoryCommentItem