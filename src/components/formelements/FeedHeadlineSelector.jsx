/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NewspaperIcon, MegaphoneIcon } from '@heroicons/react/24/solid';

const FeedHeadlineSelector = ({ field }) => {
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
                onClick={() => handleChange('feed')}
                onBlur={field?.handleBlur}
                className={`group cursor-pointer border  ${selectedType === 'feed' ? 'border-brand-primary-blue' : 'border-gray-900/25'} rounded-md px-2 py-5 lg:py-10 flex-1 hover:border-brand-primary-blue`}
            >
                <NewspaperIcon
                    aria-hidden="true"
                    className={`mx-auto size-7 group-hover:text-brand-primary-blue ${selectedType === 'feed' ? 'text-brand-primary-blue' : 'text-gray-300'
                        }`}
                />
            </div>
            <div
                onClick={() => handleChange('headline')}
                onBlur={field?.handleBlur}
                className={`group cursor-pointer border  ${selectedType === 'headline' ? 'border-brand-primary-blue' : 'border-gray-900/25'} rounded-md px-2 py-5 lg:py-10 flex-1 hover:border-brand-primary-blue`}
            >
                <MegaphoneIcon
                    aria-hidden="true"
                    className={`mx-auto size-7 group-hover:text-brand-primary-blue ${selectedType === 'headline' ? 'text-brand-primary-blue' : 'text-gray-300'
                        }`}
                />
            </div>
        </div>
    );
};

export default FeedHeadlineSelector;
