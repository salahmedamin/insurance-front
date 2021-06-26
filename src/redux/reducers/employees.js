const init = {
    list:[],
    page: -1,
  };
  export const employees = (state = init, action) => {
    switch (action.type) {
      case "SET_EMPLOYEES": {
          return {
            ...state,
            list: action.payload.data
          }
      }
      
      case "SET_SHOULD_RELOAD": {
        return {
          ...state,
          shouldReload: action.payload.data
        }
    }

      case "EMPTY_EMPLOYEES": {
        return init
    }

      case "DELETE_EMPLOYEE": {
        return {
          ...state,
          list: state.list.filter(a=>a.id !== action.payload.id)
        }
      }

      case "DELETE_EMPLOYEES": {
        return {
          ...state,
          list: state.list.filter(a=>!action.payload.idArray.contains(a.id))
        }
      }

      case "EMPLOYEES_PLUS_PAGE":
        return {
          ...state,
          page: state.page + 1
        }

        case "EMPLOYEES_MINUS_PAGE":
        return {
          ...state,
          page: state.page - 1
        }
      
      default:
          return state
    }
  }