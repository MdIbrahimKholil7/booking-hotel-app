import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useToken = (user,name) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        (async () => {
            if (user?.email) {
                const { data } = await axios.put('http://localhost:5000/user/user-token',{
                    name:name,
                    email:user?.email
                })
                setToken(data.accessToken)
                localStorage.setItem('hotelAccessToken',data.accessToken)
                console.log(data)
            }
        })()
    }, [user,name])
    return [token]
}

export default useToken