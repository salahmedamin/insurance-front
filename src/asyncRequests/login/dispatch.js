import jwt from "jsonwebtoken";
import { cookies } from "../../cookies";
import { loginAjax } from "./needs/ajax";
import { loginRedux } from "./needs/reduxDispatch";

export const loginDispatch = async (username, password, type, res) => {
  try {
    const response = await loginAjax(username, password, type, res);
    if (response.success) {
      const data = jwt.verify(response.token, process.env.REACT_APP_SECRET);
      loginRedux(data);
      cookies.setCookie("token", response.token, 30000);
      return {
        success: true,
      };
    } else {
      cookies.eraseCookie("token");
      return {
        success: false,
        message: "Invalid credentials",
      };
    }
  } catch (e) {
    return {
      success: false,
      message: e.message,
    };
  }
};
