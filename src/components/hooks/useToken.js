import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user)
    useEffect(() => {
        (async () => {
            if (user?.email) {
                const { data } = await axios.put('http://localhost:5000/user/user-token')
                setToken(data.accessToken)
                localStorage.setItem('hotelAccessToken',data.accessToken)
                console.log(data)
            }
        })()
    }, [user])
    return [token]
}

export default useToken