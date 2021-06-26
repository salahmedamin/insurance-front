import axios from "axios";
import {cookies} from "../../../cookies"


export const bulletinsAjax = async (type) => {
  const token = cookies.getCookie("token")
  
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/bulletins/view`,
    { type },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res
};
