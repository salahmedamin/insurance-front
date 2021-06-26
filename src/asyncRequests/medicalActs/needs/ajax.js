import axios from "axios";
import { cookies } from "../../../cookies";

export const medicalActsAjax = async () => {
  //type is one of ["person","enterprise","subinsured"]
  const token = cookies.getCookie("token")
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/medical-acts/`,
    {

    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res.data
};
