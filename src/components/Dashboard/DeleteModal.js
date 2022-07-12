import React from 'react';

const DeleteModal = ({setOpenModal,setSingleUser,openModal}) => {
    const {_id,name}=openModal || {}
    const handleNo=()=>{
        setOpenModal(null)
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="deleteUser" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {name}</h3>
                   
                    <div class="modal-action">
                        <label for="deleteUser" onClick={handleNo} class="btn">No</label>
                        <label for="deleteUser" class="btn bg-red-500 text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;