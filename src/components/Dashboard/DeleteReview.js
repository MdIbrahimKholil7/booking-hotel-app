import axios from 'axios';
import React from 'react';
import fetcher from '../../api/fetcher';

const DeleteReview = ({ setOpenModal, refetch, openModal }) => {

    const { _id } = openModal || {}

    const handleNo = () => {
        setOpenModal(null)
    }

    // console.log(_id)
    const handleDelete = async (id) => {
        fetch(`https://mighty-beyond-31065.herokuapp.com/review/delete-review`, {
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
            <input type="checkbox" id="deleteReview" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete this review</h3>

                    <div class="modal-action">
                        <label for="deleteReview" onClick={handleNo} class="btn">No</label>
                        <label onClick={() => handleDelete(_id)} for="deleteUser" class="btn bg-red-500 text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteReview;