import axios from "axios";
import { cookies } from "../../../cookies";

export const insuredAjax = async () => {
  //type is one of ["person","enterprise","subinsured"]
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/assure/view`,
    { viewTree:true },
    {
      headers: {
        authorization: cookies.getCookie("token"),
      },
    }
  );
  return res.data
};
