import axios from "axios";

export const loginAjax = async (username, password, type, response) => {
  //type is one of ["person","enterprise","subinsured"]
  const res = await axios.post(
    process.env.REACT_APP_ENDPOINT + `/auth/${type}`,
    { username, password },
    {
      headers: {
        response,
      },
    }
  );
  return {
    success: res.data.success,
    token: res.headers.authorization,
    message: res.data.message,
  };
};
