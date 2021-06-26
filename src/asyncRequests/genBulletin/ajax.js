import axios from "axios";
import {cookies} from "../../cookies"
import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";


export const createBulletinAjax = async () => {
  const token = cookies.getCookie("token")
  loadDashboard(true)
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/bulletin/create`,
    { },
    {
      headers: {
        authorization: token,
      },
    }
  )
  loadDashboard(false)
  return res
};
