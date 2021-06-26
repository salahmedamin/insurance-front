import axios from "axios";
import {cookies} from "../../../cookies"


export const contractAjax = async (unique) => {
  const token = cookies.getCookie("token")
  //type is one of ["person","enterprise","subinsured"]
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/contract/view`,
    { contractUnique: unique },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res
};
