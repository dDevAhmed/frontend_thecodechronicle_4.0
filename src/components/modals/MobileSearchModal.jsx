import { useContext } from 'react'
import Modal from '../../ui/Modal'
import AppContext from "../../contexts/AppContext";
import SearchBar from '../../ui/SearchBar';

const MobileSearchModal = () => {

    // do the auth check before showing the sign modal

    const {
        showMobileSearchModal, setShowMobileSearchModal,
        showMobileSearchResults, setShowMobileSearchResults
    } = useContext(AppContext);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const { mutate: signIn, isLoading, isError, error } = useSignIn();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     signIn(
    //         { email, password },
    //     );
    // };

    return (
        <Modal showModal={showMobileSearchModal} setShowModal={setShowMobileSearchModal}>
            <SearchBar placeholder={'Search for something...'} state={true} setState={setShowMobileSearchResults}/>

            <div className={`max-h-80 overflow-y-auto px-5 py-3 ${showMobileSearchResults ? 'flex' : 'hidden'}`}>
                {/* todo - if results ? show : no results for matched query */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur a hic eveniet ea inventore quos repellendus ipsa repellat dolore maiores, eaque culpa consequatur possimus doloribus. Similique et excepturi consectetur fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptatem suscipit ducimus aliquam placeat officiis rem error, quidem provident obcaecati at necessitatibus molestias cum eaque nisi animi in voluptates? Est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam eveniet praesentium a repellendus ad omnis, amet et explicabo molestiae? Labore quos atque amet modi nostrum reiciendis corporis temporibus tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero odit doloremque eum quasi atque cumque. Error praesentium cumque quo aliquam assumenda. Fugit voluptatem, velit similique voluptatum inventore tenetur!
            </div>
        </Modal>
    )
}

export default MobileSearchModal