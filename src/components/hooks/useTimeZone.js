import { useLocation } from "react-router-dom"

const useTimeZone=()=>{
    const location=useLocation()
    console.log(location)
}

export default useTimeZone