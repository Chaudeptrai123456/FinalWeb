import axios from "../../src/axios"

const handlelogin=(email,password)=>{
    return axios.post('/api/login',{email,password})
}

export {handlelogin}