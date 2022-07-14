import axios from "axios"
import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [adminLoading, setAdminLoading] = useState(true)
    const [admin, setAdmin] = useState(null)
    console.log(user)
    useEffect(() => {
        if (user?.email) {
            (async () => {
              
                const { data } = await axios.get(`https://mighty-beyond-31065.herokuapp.com/user/get-admin?email=${user?.email}`)
               
                console.log(data[0].admin)
                setAdmin(data[0].admin)
                setAdminLoading(false)
            })()
        }
    }, [user])
    console.log(admin)
    return [adminLoading, admin]
}
export default useAdmin