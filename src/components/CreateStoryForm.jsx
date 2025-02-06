/* eslint-disable no-unused-vars */
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useForm } from '@tanstack/react-form'
import { useCreateStory } from '../services/StoryService';
import { useCategories } from '../services/CategoryService'
import { capitalizeWords } from '../utils/capitalize'
import { useUploadMedia } from '../services/MediaService'
import Card from '../ui/Card'
import Spinner from '../ui/Spinner'
import Button from '../ui/Button'
import TinyEditor from './formelements/TinyEditor'
import TagsInputCmp from './formelements/TagsInputCmp'
import StoryTypeSelector from './formelements/StoryTypeSelector'
import FeedHeadlineSelector from './formelements/FeedHeadlineSelector'
import ImageUpload from './formelements/ImageUpload';

const CreateStoryForm = () => {

    const { mutate: createStory, isPending, isError, error, isSuccess } = useCreateStory();
    const { data: categories, isPending: categoriesPending, isError: categoriesError } = useCategories()
    const { mutateAsync: uploadMedia, data: uploadMediaData, isPending: mediaPending, isError: mediaIsError, error: mediaError, isSuccess: medialUploadSuccess } = useUploadMedia();

    const form = useForm({
        defaultValues: {
            title: '',
            type: '',
            category: '',
            setAs: '',
            tags: [],
            message: '',
            // coverImage: '',
            primaryMedia: {
                url: '',
                credit: ''
            },
            // secondaryMedia: [
            //     {
            //         url: 'uploadMediaData',
            //         credit: ''
            //     },
            // ],
            // authorId: '', // get from the auth user
        },
        onSubmit: async ({ value }) => {
            console.log('CreateStoryForm - Form values:', value);

            if (value.primaryMedia?.file) {
                try {
                    const uploadedMediaUrl = await uploadMedia(value.primaryMedia.file);
                    value.primaryMedia.url = uploadedMediaUrl;

                } catch (error) {
                    console.error('Upload failed:', error.message);
                    return error.message;
                }
            }

            // Remove the `file` field from primaryMedia before sending to the backend
            const { file, ...primaryMediaWithoutFile } = value.primaryMedia;
            const formData = {
                ...value,
                primaryMedia: primaryMediaWithoutFile,
            };

            createStory(formData);
        },
    });

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
                    <form.Field name="primaryMedia">
                        {(field) => (
                            <ImageUpload field={field} />
                        )}
                    </form.Field>
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
                                    <TagsInputCmp field={field} />
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
                        {isPending ? <Spinner color={'#ffffff'} size={20} /> : 'Save'}
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