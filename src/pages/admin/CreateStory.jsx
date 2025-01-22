import CreateStoryForm from '../../components/CreateStoryForm'
import PageTitle from '../../ui/PageTitle'
const CreateStory = () => {

    // form
    return (
        <>
            <PageTitle>Create Story</PageTitle>
            <div className=''>
                <CreateStoryForm />
                {/* preview window for desktop */}
            </div>
        </>
    )
}

export default CreateStory
