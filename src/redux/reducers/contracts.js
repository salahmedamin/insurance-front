const init = {
    list:[],
    page: -1,
    total: -1,
  };
  export const contracts = (state = init, action) => {
    switch (action.type) {
      case "SET_CONTRACTS": {
          return {
            ...state,
            list: action.payload.data||state.list,
            page: action.payload.page||state.page,
            total: action.payload.total||state.total
          }
      }

      case "CONTRACTS_SHOULD_RELOAD":{
        return {
          ...state,
          shouldReload: action.payload.data
        }
      }
      
      default:
          return state
    }
  }