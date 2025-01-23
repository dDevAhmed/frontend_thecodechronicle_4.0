import CreateStoryForm from '../../components/CreateStoryForm'
import PageTitle from '../../ui/PageTitle'
import Toastify from '../../ui/Toastify';
import { Bounce } from 'react-toastify';
const CreateStory = () => {

    // form
    return (
        <>
            {/* //fixme - move to global stage */}
            <Toastify
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            <PageTitle>Create Story</PageTitle>
            <div className=''>
                <CreateStoryForm />
                {/* preview window for desktop */}
            </div>
        </>
    )
}

export default CreateStory
