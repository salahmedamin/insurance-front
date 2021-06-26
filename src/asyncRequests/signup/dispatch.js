import axios from "axios"

export const signupAjax =  async(nom,adresse,tel,matFiscal)=>{
    
    const res = await axios.post(process.env.REACT_APP_ENDPOINT+`/entreprise/create`,{nom,adresse,tel,matFiscal})
    return res.data
}