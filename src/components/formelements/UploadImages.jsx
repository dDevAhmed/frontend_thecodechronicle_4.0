/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid'

const UploadImages = ({ field }) => {

    const [file, setFile] = useState(field?.value || '');
    
    const handleUploadFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        if (field?.handleChange) {
            field.handleChange(e.target.files[0]);
        }
    }

    return (
        <div className="col-span-full flex flex-col gap-5">
            <div>
                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                    {/* //todo - change to primary photo (including the form.field name) if image type selected */}
                    Cover photo
                </label>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:py-28 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${file && file})` }}>
                    <div className="text-center">
                        <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                        <div className="mt-4 flex text-sm/6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleUploadFile} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>

            {/* //todo - work on secondary media */}
            <div>
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

                    <div className='rounded-lg relative h-24 w-24 bg-cover bg-no-repeat bg-center'>
                        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg cursor-pointer">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                            >
                                <span className="text-white text-2xl">+</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleUploadFile} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImages;
