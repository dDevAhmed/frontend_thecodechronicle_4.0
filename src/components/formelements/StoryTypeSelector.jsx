/* eslint-disable react/prop-types */
import { useState } from 'react';
import { DocumentTextIcon, PhotoIcon, MicrophoneIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const StoryTypeSelector = ({ field }) => {
    const [selectedType, setSelectedType] = useState(field?.value || '');

    const handleChange = (type) => {
        setSelectedType(type);
        if (field?.handleChange) {
            field.handleChange(type);
        }
    };

    return (
        <div className="flex justify-between gap-3">
            <div
                onClick={() => handleChange('text')}
                onBlur={field?.handleBlur}
                className={`group cursor-pointer border ${selectedType === 'text' ? 'border-brand-primary-blue' : 'border-gray-900/25'} rounded-md px-2 py-5 lg:py-10 flex-1 hover:border-brand-primary-blue`}
            >
                <DocumentTextIcon
                    aria-hidden="true"
                    className={`mx-auto size-7 group-hover:text-brand-primary-blue ${selectedType === 'text' ? 'text-brand-primary-blue' : 'text-gray-300'
                        }`}
                />
            </div>
            <div
                onClick={() => handleChange('image')}
                onBlur={field?.handleBlur}
                className={`group cursor-pointer border ${selectedType === 'image' ? 'border-brand-primary-blue' : 'border-gray-900/25'} rounded-md px-2 py-5 lg:py-10 flex-1 hover:border-brand-primary-blue`}
            >
                <PhotoIcon
                    aria-hidden="true"
                    className={`mx-auto size-7 group-hover:text-brand-primary-blue ${selectedType === 'image' ? 'text-brand-primary-blue' : 'text-gray-300'
                        }`}
                />
            </div>
            <div
                onClick={() => handleChange('audio')}
                onBlur={field?.handleBlur}
                className={`group cursor-pointer border ${selectedType === 'audio' ? 'border-brand-primary-blue' : 'border-gray-900/25'} rounded-md px-2 py-5 lg:py-10 flex-1 hover:border-brand-primary-blue`}
            >
                <MicrophoneIcon
                    aria-hidden="true"
                    className={`mx-auto size-7 group-hover:text-brand-primary-blue ${selectedType === 'audio' ? 'text-brand-primary-blue' : 'text-gray-300'
                        }`}
                />
            </div>
            <div
                onClick={() => handleChange('video')}
                onBlur={field?.handleBlur}
                className={`group cursor-pointer border ${selectedType === 'video' ? 'border-brand-primary-blue' : 'border-gray-900/25'} rounded-md px-2 py-5 lg:py-10 flex-1 hover:border-brand-primary-blue`}
            >
                <VideoCameraIcon
                    aria-hidden="true"
                    className={`mx-auto size-7 group-hover:text-brand-primary-blue ${selectedType === 'video' ? 'text-brand-primary-blue' : 'text-gray-300'
                        }`}
                />
            </div>
        </div>
    );
};

export default StoryTypeSelector;
