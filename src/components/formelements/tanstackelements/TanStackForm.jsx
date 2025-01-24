/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from '@tanstack/react-form'
import { useCreateStory } from '../services/StoryService';

const TanStackForm = ({ children, onsubmit }) => {

  const { mutate: createStory, isPending, isError, error, isSuccess } = useCreateStory();

  const form = useForm({
    defaultValues: {
      // title: '',
      // type: 'text',
      // category: '1',      //string or number doesn't matter cause of stringify at story service
      // setAs: 'feed',
      // tags: [],
      // content: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      // createStory(
      //     value
      // );
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}>

      {children}

    </form>
  )
}

export default TanStackForm