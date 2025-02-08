import React, { useContext } from 'react'
import ComingSoonImage from '../../assets/images/icons8-coming-soon-100.png'
import Modal from '../../ui/Modal'
import AppContext from '../../contexts/AppContext';

const ComingSoon = () => {
    const {
        showComingSoonModal, setShowComingSoonModal
    } = useContext(AppContext);

    return (
        <Modal showModal={showComingSoonModal} setShowModal={setShowComingSoonModal}>
            <div className='p-5 shadow-sm rounded-lg flex flex-col gap-5 justify-center items-center'>
                <img src={ComingSoonImage} alt='Coming Soon Icon' />
                <span className='text-center'>
                    <h3 className='text-2xl'>Coming Soon!</h3>
                    <p className='text-gray-700 text-sm mt-2'>We will notify you once this feature is ready</p>
                </span>
            </div>
        </Modal>
    )
}

export default ComingSoon