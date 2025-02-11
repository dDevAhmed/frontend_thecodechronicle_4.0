/* eslint-disable react/prop-types */
const GallerySlider = ({ media }) => {

    console.log(media)

    return (

        <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar scroll-smooth my-5 h-44">

            {
                media?.map((image, index) => (
                    <img
                        key={index}
                        className="aspect-16/9 rounded-lg object-cover h-full"
                        src={image.url}
                        onClick={''}
                    />
                ))
            }
        </div>
    );
}

export default GallerySlider