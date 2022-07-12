import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useToken = (user,name) => {
    const [token, setToken] = useState('')
    console.log(user?.displayName)
    useEffect(() => {
        (async () => {
            if (user?.email && name) {
                const { data } = await axios.put('http://localhost:5000/user/user-token',{
                    name:user?.displayName,
                    email:name
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