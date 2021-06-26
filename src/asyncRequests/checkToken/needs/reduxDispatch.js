import { store } from "../../../redux/store";

export const validate = (data) =>
  store.dispatch({
    type: "SET_LOGGED_IN",
    payload: {
      data,
    },
  });

export const logout = () =>
  store.dispatch({
    type: "SET_LOGGED_OUT",
  });
