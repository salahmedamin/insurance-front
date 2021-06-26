import axios from "axios"

export const checkTokenAjax =  async(token)=>{
    const res = await axios.post(process.env.REACT_APP_ENDPOINT+"/token/verify",{token})
    return res.data.isBlacklisted
}