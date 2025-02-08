/* eslint-disable react/prop-types */
import { useState } from 'react';

const ImagesUpload = ({ field }) => {
    const [mediaArray, setMediaArray] = useState(field?.state?.value || []);

    const handleUploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fileUrl = URL.createObjectURL(file);

        // Create a new media object
        const newMedia = {
            url: fileUrl,
            credit: '', // Initialize credit as empty
            file: file, // Store the file object for later upload
        };

        // Add the new media object to the array
        const updatedMediaArray = [...mediaArray, newMedia];
        setMediaArray(updatedMediaArray);

        // Update the form field value
        if (field?.handleChange) {
            field.handleChange(updatedMediaArray);
        }
    };

    const handleCreditChange = (index, credit) => {
        const updatedMediaArray = mediaArray.map((media, i) =>
            i === index ? { ...media, credit } : media
        );

        setMediaArray(updatedMediaArray);

        // Update the form field value
        if (field?.handleChange) {
            field.handleChange(updatedMediaArray);
        }
    };

    return (
        <div>
            <label htmlFor="secondary-photos" className="block text-sm/6 font-medium text-gray-900">
                Secondary Photos
            </label>
            <div className="flex flex-wrap items-center gap-3 mt-2">
                {/* Render uploaded images */}
                {mediaArray.map((media, index) => (
                    <div key={index} className="relative rounded-lg h-24 w-24 bg-cover bg-no-repeat bg-center border">
                        <div
                            className="absolute inset-0 rounded-lg"
                            style={{ backgroundImage: `url(${media.url})` }}
                        ></div>
                        <input
                            type="text"
                            value={media.credit}
                            onChange={(e) => handleCreditChange(index, e.target.value)}
                            placeholder="Credit"
                            className="absolute bottom-0 left-0 right-0 w-full p-1 text-xs bg-black bg-opacity-50 text-white placeholder-gray-300 focus:outline-none"
                        />
                    </div>
                ))}

                {/* Add new image button */}
                <div className="border rounded-lg relative h-24 w-24 bg-cover bg-no-repeat bg-center">
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                        >
                            <span className="text-gray-500 text-2xl font-light">+</span>
                            <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleUploadFile}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesUpload;