/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

const ImageUpload = ({ field }) => {
    const [file, setFile] = useState(field?.state?.value?.url || '');

    const handleUploadFile = (e) => {
        const fileSelected = e.target.files[0];
        console.log('ImageUpload - fileSelected', fileSelected);

        if (!fileSelected) return;

        const fileUrl = URL.createObjectURL(fileSelected);
        setFile(fileUrl);

        if (field?.handleChange) {
            field.handleChange({
                ...field.state.value,
                url: fileUrl, // Store the URL for preview
                file: fileSelected, // Temporarily store the File object (not sent to backend)
            });
        }
    };

    const handleCreditChange = (e) => {
        const credit = e.target.value;

        if (field?.handleChange) {
            field.handleChange({
                ...field.state.value,
                credit: credit,
            });
        }
    };

    return (
        <div className="col-span-full flex flex-col gap-5">
            <div>
                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                    Cover photo
                </label>
                <div
                    className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:py-28 bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${file})` }}
                >
                    <div className="text-center">
                        <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                        <div className="mt-4 flex text-sm/6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleUploadFile}
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>

                <div className="mt-5 border border-gray-900/25 rounded-md">
                    <input
                        name="credit"
                        value={field?.state?.value?.credit || ''}
                        onChange={handleCreditChange}
                        id="credit"
                        type="text"
                        placeholder="Credit"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;