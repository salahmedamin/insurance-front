import axios from "axios";
import {store} from "../../../redux/store"
import {cookies} from "../../../cookies"


export const employeesAjax = async (unique) => {
  const token = cookies.getCookie("token")
  //type is one of ["person","enterprise","subinsured"]
  const {id, matFiscal} = store.getState().auth
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/entreprise/viewEmployees`,
    { entID: id, entMatricule: matFiscal, contractUnique: unique },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res
};
