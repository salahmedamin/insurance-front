const init = {
    list:[],
    page: -1
  };
  export const bulletins = (state = init, action) => {
    switch (action.type) {
      case "SET_BULLETINS": {
          return {
            ...state,
            list: action.payload.data
          }
      }

      case "BULLETINS_PLUS_PAGE":
        return {
          ...state,
          page: state.page + 1
        }

        case "BULLETINS_MINUS_PAGE":
        return {
          ...state,
          page: state.page - 1
        }

      default:
          return state
    }
  }