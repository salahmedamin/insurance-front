import axios from "axios"

export default async(token)=>{
    await axios.post(process.env.REACT_APP_ENDPOINT,{token})
}