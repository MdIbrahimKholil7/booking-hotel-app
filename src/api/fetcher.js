import axios from "axios";

const fetcher=axios.create({
    baseURL:'https://mighty-beyond-31065.herokuapp.com/'
})
export default fetcher