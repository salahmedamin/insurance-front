const init = {
  list: [],
  page: -1,
};
export const subinsured = (state = init, action) => {
  switch (action.type) {
    case "SET_INSURED": {
      return {
        ...state,
        list: action.payload.data,
      };
    }

    case "DELETE_INSURED": {
      return {
        ...state,
        list: state.list.filter((a) => a.id !== action.payload.id),
      };
    }

    case "DELETE_MANY_INSURED": {
      return {
        ...state,
        list: state.list.filter((a) => !action.payload.idArray.contains(a.id)),
      };
    }

    case "INSURED_PLUS_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };

    case "INSURED_MINUS_PAGE":
      return {
        ...state,
        page: state.page - 1,
      };

    default:
      return state;
  }
};
