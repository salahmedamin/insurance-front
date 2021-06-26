import axios from "axios";
import {store} from "../../../redux/store"
import {cookies} from "../../../cookies"


export const contractsAjax = async (status) => {
  const token = cookies.getCookie("token")
  //type is one of ["person","enterprise","subinsured"]
  const {id, matFiscal} = store.getState().auth
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/entreprise/viewContracts`,
    { entID: id, entMatricule: matFiscal, status },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res
};
