const init = {
  isLogged: null
};
export const auth = (state = init, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN": {
        return {
          ...action.payload.data,
          isLogged: true
        }
    }
    case "SET_LOGGED_OUT": {
        return {
          ...init,
          isLogged: false,
        }
    }
    default:
        return state
  }
}