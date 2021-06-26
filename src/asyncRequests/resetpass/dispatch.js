import axios from "axios"

export const resetPassAjax =  async(id,type,oldPass,newPass)=>{
    const res = await axios.post(process.env.REACT_APP_ENDPOINT+`/changePass/${type}`,{id,oldPass,newPass})
    return res.data.success
}