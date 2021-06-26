export const currentContract = (state={}, action) => {
    switch (action.type) {
      case "SET_CURRENT_CONTRACT": {
          return {
            ...action.payload.data
          }
      }
      
      case "EMPTY_CURRENT_CONTRACT":
        return {}
      default:
          return state
    }
  }