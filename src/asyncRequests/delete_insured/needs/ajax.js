import axios from "axios";
import { cookies } from "../../../cookies";

export const deleteInsuredAjax = async (id) => {
  //type is one of ["person","enterprise","subinsured"]
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/assure/deleteSubInsured`,
    { id },
    {
      headers: {
        authorization: cookies.getCookie("token"),
      },
    }
  );
  return res.data
};
