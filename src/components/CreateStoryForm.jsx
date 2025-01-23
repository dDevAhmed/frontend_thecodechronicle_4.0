import { PhotoIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import TinyEditor from './formelements/TinyEditor'
import Card from '../ui/Card'
import TagsFormInput from './formelements/TagsFormInput'

const CreateStoryForm = () => {
    return (
        <form>

            <div className="mt-5 flex flex-col gap-5 pb-10">
                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                            Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                <div className="mt-4 flex text-sm/6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            Title
                        </label>
                        <div className="mt-2 border border-gray-900/25 rounded-md">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl flex flex-col gap-5'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            Type
                        </label>
                        <div className="mt-2 border border-gray-900/25 rounded-md">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Category
                        </label>
                        <div className="mt-2 grid grid-cols-1 border border-gray-900/25 rounded-md">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option>Backend</option>
                                <option>Frontend</option>
                                <option>Mobile</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Set As
                        </label>
                        <div className='flex gap-5'>
                            <div className="flex items-center gap-x-3">
                                <input
                                    defaultChecked
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                />
                                <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                                    feed
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-email"
                                    name="push-notifications"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                />
                                <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                                    headline
                                </label>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            Tags
                        </label>
                        <div className="mt-2 w-full">
                            {/* <input
                                id="title"
                                name="title"
                                type="text"
                                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            /> */}
                            <TagsFormInput />
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                        Content
                    </label>
                    <div className='mt-2'>
                        <TinyEditor />
                    </div>
                </Card>

                <div className="flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>

        </form>
    )
}

export default CreateStoryForm