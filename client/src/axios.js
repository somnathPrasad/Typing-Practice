import axios from "axios"

const instace = axios.create({
    baseURL:"http://localhost:3001",
})

export default instace;