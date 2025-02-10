/* eslint-disable react/prop-types */
import React from 'react'

const StoryCardImageGalleryView = ({ post }) => {

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-2'>
            <div
                className={`rounded-lg h-44 w-full bg-cover bg-no-repeat bg-center md:col-span-2 md:h-full`}
                style={{
                    backgroundImage: `url(${post.primaryMedia.url})`,
                    // aspectRatio: '16 / 9',
                }}
            ></div>
            {/* fixme - use images not div */}
            <div className='flex items-center gap-2 w-full md:cols-1 md:flex-col'>
                {
                    post?.secondaryMedia.slice(0, 2).map((media, index) => {
                        if (index === 1 && post.secondaryMedia.length > 2) {

                            const remainingCount = post?.secondaryMedia.length - 2;

                            return (
                                <div key={index} className={`rounded-lg relative h-28 w-full bg-cover bg-no-repeat bg-center`}
                                    style={{
                                        backgroundImage: `url(${media.url})`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg cursor-pointer">
                                        {/* //todo - onclick view gallery */}
                                        <span className="text-white text-2xl">+{remainingCount}</span>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className={`h-28 w-full bg-cover bg-no-repeat bg-center rounded-lg`}
                                style={{
                                    backgroundImage: `url(${media.url})`,
                                }}
                            ></div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default StoryCardImageGalleryView