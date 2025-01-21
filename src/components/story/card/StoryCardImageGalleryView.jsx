import React from 'react'

const StoryCardImageGalleryView = ({ post }) => {

    return (
        <div className='w-full flex flex-col items-center gap-2'>
            <div
                className={`rounded-lg h-44 w-full bg-cover bg-no-repeat bg-center`}
                style={{
                    backgroundImage: `url(${post.primaryMedia.url})`,
                    // aspectRatio: '16 / 9',
                }}
            ></div>
            <div className='flex items-center gap-2 w-full'>
                {
                    post?.secondaryMedia.slice(0, 3).map((media, index) => {
                        if (index === 2 && post.secondaryMedia.length > 3) {

                            const remainingCount = post?.secondaryMedia.length - 3;

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