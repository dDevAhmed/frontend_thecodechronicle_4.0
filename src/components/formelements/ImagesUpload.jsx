/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid'

const ImagesUpload = ({ field }) => {

    const [file, setFile] = useState(field?.value || '');

    const handleUploadFile = (e) => {
        const file = e.target.files[0];
        setFile(URL.createObjectURL(file));
        if (field?.handleChange) {
            field.handleChange(file);
        }
    };

    return (

        <div>
            {/* //todo - work on secondary media */}
            <label htmlFor="secondary-photos" className="block text-sm/6 font-medium text-gray-900">
                Secondary Photos
            </label>
            <div className='flex flex-wrap items-center gap-3 mt-2'>
                {/* <div
                    className='group cursor-pointer border border-gray-900/25 rounded-md p-5 flex-1 hover:border-brand-primary-blue'
                >
                    <PhotoIcon
                        aria-hidden="true"
                        className='mx-auto size-12 group-hover:text-brand-primary-blue text-gray-300'
                    />
                </div> */}
                <div
                    className='rounded-lg h-24 w-24 bg-cover bg-no-repeat bg-center border'
                    style={{ backgroundImage: `url(${file && file})` }}></div>

                <div className='border rounded-lg relative h-24 w-24 bg-cover bg-no-repeat bg-center'>
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                        >
                            <span className="text-gray-500 text-2xl font-light">+</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleUploadFile} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesUpload;
