/* eslint-disable no-unused-vars */
import { PhotoIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import TinyEditor from './formelements/TinyEditor'
import Card from '../ui/Card'
import TagsFormInput from './formelements/TagsFormInput'
import { useForm } from '@tanstack/react-form'
import { useCreateStory } from '../services/StoryService';
import { useCategories } from '../services/CategoryService'
import { capitalizeWords } from '../utils/capitalize'
import StoryTypeSelector from './formelements/StoryTypeSelector'
import Button from '../ui/Button'
import FeedHeadlineSelector from './formelements/FeedHeadlineSelector'

const CreateStoryForm = () => {

    const { mutate: createStory, isPending, isError, error, isSuccess } = useCreateStory();
    const { data: categories, isPending: categoriesPending, isError: categoriesError } = useCategories()

    const form = useForm({
        defaultValues: {
            title: '',
            type: '',
            category: '',
            setAs: '',
            tags: [],
            message: '',
        },
        onSubmit: async ({ value }) => {
            // Do something with form data
            console.log(value)
            createStory(
                value
            );
        },
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}>

            <div className="mt-5 flex flex-col gap-5 pb-20">
                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                            Type
                        </label>
                        <div className="mt-2">
                            <form.Field name="type">
                                {(field) => (
                                    <StoryTypeSelector field={field} />
                                )}
                            </form.Field>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                            Title
                        </label>
                        <div className="mt-2 border border-gray-900/25 rounded-md">
                            <form.Field name="title">
                                {(field) => (
                                    <input
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        id="title"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                )}
                            </form.Field>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="col-span-full flex flex-col gap-5">
                        <div>
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

                        {/* //todo - work on secondary media */}
                        <div>
                            <label htmlFor="secondary-photos" className="block text-sm/6 font-medium text-gray-900">
                                Secondary Photos
                            </label>
                            <div className='flex items-center gap-5 mt-2'>
                                <div
                                    className='group cursor-pointer border border-gray-900/25 rounded-md p-5 flex-1 hover:border-brand-primary-blue'
                                >
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className='mx-auto size-12 group-hover:text-brand-primary-blue text-gray-300'
                                    />
                                </div>
                                <div className='rounded-lg relative min-h-20 w-full bg-cover bg-no-repeat bg-center'>
                                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg cursor-pointer">
                                        {/* //todo - onclick trigger file upload, use plus icon */}
                                        <span className="text-white text-2xl">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Category
                        </label>
                        <div className="mt-2 grid grid-cols-1 border border-gray-900/25 rounded-md">
                            <form.Field name="category">
                                {(field) => (
                                    <>
                                        <select
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            id="category"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option value=''>(choose a category)</option>
                                            {
                                                categories?.map((category, index) => (
                                                    <option key={index} value={category.id}>{capitalizeWords(category.name)}</option>
                                                ))
                                            }
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </>
                                )}
                            </form.Field>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">
                        Message
                    </label>
                    <div className='mt-2'>
                        <form.Field name="message">
                            {(field) => (
                                <TinyEditor field={field} />
                            )}
                        </form.Field>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="tags" className="block text-sm/6 font-medium text-gray-900">
                            Tags
                        </label>
                        <div className="mt-2">
                            <form.Field name="tags">
                                {(field) => (
                                    <TagsFormInput field={field} />
                                )}
                            </form.Field>
                        </div>
                    </div>
                </Card>

                <Card classNames={'bg-white p-5 rounded-2xl'}>
                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Set As
                        </label>
                        <div className="mt-2">
                            <form.Field name="setAs">
                                {(field) => (
                                    <FeedHeadlineSelector field={field} />
                                )}
                            </form.Field>
                        </div>
                    </div>
                </Card>

                {/* //todo - add preview button for small, medium screens/} */}
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

                <Button
                    type="submit"
                    classNames={"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                >
                    Preview
                </Button>
            </div>

        </form>
    )
}

export default CreateStoryForm