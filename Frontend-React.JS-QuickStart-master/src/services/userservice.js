import axios from "../../src/axios"

const handlelogin=(email,password)=>{
    return axios.post('/api/login')
}

export {handlelogin}