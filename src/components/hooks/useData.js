import axios from "axios"
import { useEffect, useState } from "react"

const useData=(id)=>{
    const [data, setData] = useState({})
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://hotel-server-2.vercel.app/getRoom/room/${id}`)
            setData(data)
        })()
    }, [id])
    return[data]
}
export default useData