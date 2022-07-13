import axios from 'axios';
import React from 'react';
import fetcher from '../../api/fetcher';

const DeleteModal = ({ setOpenModal, refetch, openModal,url }) => {
    const { _id, name } = openModal || {}
    const handleNo = () => {
        setOpenModal(null)
    }
    // console.log(_id)
    const handleDelete = async (id) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(res => res.json())
            .then(data => console.log('ds'))
        refetch()
        setOpenModal(null)
    }
    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="deleteUser" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {name?name:''}</h3>

                    <div class="modal-action">
                        <label for="deleteUser" onClick={handleNo} class="btn">No</label>
                        <label onClick={() => handleDelete(_id)} for="deleteUser" class="btn bg-red-500 text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;