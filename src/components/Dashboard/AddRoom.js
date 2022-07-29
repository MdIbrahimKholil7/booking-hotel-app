import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddRoom = () => {
    const [image, setImage] = useState([])
    const [imgUrl, setImgUrl] = useState('')

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {

            setImage(
                acceptedFile.map(upFile => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const city = e.target.city.value
        const roomType = e.target.roomType.value
        const price = e.target.price.value
        const desc = e.target.desc.value

        const uploadImage = image[0]
        const url = `https://api.imgbb.com/1/upload?key=b0218fca63a2d42f3b150732dddf9450`
        const formData = new FormData()
        formData.append('image', uploadImage)
        try {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setImgUrl(data.data.display_url)


                })
        }
        catch (error) {
            console.log(error)
        }

        const room = {
            city,
            roomType,
            price,
            desc,
            img: imgUrl
        }

        // if (!roomName || !city || !roomType || !price || !desc) return
        const { data: details } = await axios.post('https://mighty-beyond-31065.herokuapp.com/getRoom/post-room', { room })
            .then(res => Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Room Add Success',
                showConfirmButton: false,
                timer: 2000
            }))

        console.log(details)
        e.target.reset()
        /* const {data}=await axios.post('https://mighty-beyond-31065.herokuapp.com/getRoom/post-room')
        console.log(data) */
    }

    return (
        <div className='md:px-5 px- my-10'>
            <div className='shadow-lg rounded-md mb-5 p-4'>
                <h1 className='text-2xl text-[#757373]'>Add New Room</h1>
            </div>
            <div className='mt-5 shadow-lg py-9 rounded-md'>
                <form
                    onSubmit={handleSubmit}
                    className='w-[70%] mx-auto '

                >
                    <div>
                        <div className='flex flex-col md:flex-row md:gap-7 gap-2'>
                            <div className='w-full'>
                                <label htmlFor="">Ratings</label>
                                <input className='block rounded-none edit-input input w-full mt-2' type="number" name='name' placeholder='Ratings' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="">City</label>
                                <input className='block rounded-none input edit-input w-full mt-2' type="text" name='city' placeholder='City' />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label>Room Type</label>
                            <input className='block rounded-none edit-input input w-full mt-2' type="text" name='roomType' placeholder='Room Type' />
                        </div>
                        <div className='mt-3'>
                            <label>Price</label>
                            <input className='block rounded-none edit-input input w-full mt-2' type="number" name='price' placeholder='Price' />

                        </div>
                        <div className='mt-3'>
                            <label>Room Desc</label>
                            <textarea class="textarea mt-4 min-h-[150px] w-full textarea-bordered" placeholder="Room desc" name='desc'></textarea>
                        </div>
                        <div className="form-control border-solid border-[1px] border-gray-600 rounded-md h-56 mt-4 flex justify-center items-center flex-col">
                            <div
                                className=''
                                {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div >
                                    {
                                        isDragActive ?
                                            <p>Drop the files here ...</p> :
                                            <p className='px-4'>Drag your image for upload Or Click</p>

                                    }
                                </div>
                                <div className='mt-9'>
                                    {
                                        image.map(upFile => {

                                            return (
                                                <img className='w-[100px] mx-auto' src={upFile.preview} alt="" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className='btn btn-primary input block rounded-md mt-7 mx-auto' type="submit" value='Submit' />
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddRoom;