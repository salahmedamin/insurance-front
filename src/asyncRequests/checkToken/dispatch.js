import { checkTokenAjax } from "./needs/ajax";
import { logout,validate } from "./needs/reduxDispatch";
import jwt from "jsonwebtoken"
import { cookies } from "../../cookies";

export const checkTokenDispatch = async(token) => {
  try {
    const isBlacked = await checkTokenAjax(token)
    if (!isBlacked) {
      const data = jwt.verify(token, process.env.REACT_APP_SECRET)
      validate(data)
      return true
    }
    else{
        cookies.eraseCookie("token")
        logout()
        return false
    }
  } catch (e) {
    cookies.eraseCookie("token")
    return false
  }
};
