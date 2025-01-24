/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PhotoIcon, MicrophoneIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const StoryTypeSelector = ({ field }) => {
    const { value, onChange, onBlur } = field;

    // value={field.state.value}
    // onBlur={field.handleBlur}
    // onChange={(e) => field.handleChange(e.target.value)}

    return (
        <div className="flex justify-around">
            <div onClick={() => field.handleChange('image')} className="cursor-pointer">
                <PhotoIcon aria-hidden="true" className={`mx-auto size-12 ${value === 'image' ? 'text-brand-primary-blue' : 'text-gray-300'}`} />
            </div>
            <div onClick={() => field.handleChange('audio')} className="cursor-pointer">
                <MicrophoneIcon aria-hidden="true" className={`mx-auto size-12 ${value === 'audio' ? 'text-brand-primary-blue' : 'text-gray-300'}`} />
            </div>
            <div onClick={() => field.handleChange('video')} className="cursor-pointer">
                <VideoCameraIcon aria-hidden="true" className={`mx-auto size-12 ${value === 'video' ? 'text-brand-primary-blue' : 'text-gray-300'}`} />
            </div>
        </div>
    );
};

export default StoryTypeSelector;