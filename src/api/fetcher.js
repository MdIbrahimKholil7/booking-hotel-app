import axios from "axios";

const fetcher=axios.create({
    baseURL:'https://hotel-server-2.vercel.app/'
})
export default fetcher