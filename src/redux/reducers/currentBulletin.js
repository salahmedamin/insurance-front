export const currentBulletin = (state={}, action) => {
    switch (action.type) {
      case "SET_CURRENT_BULLETIN": {
          return {
            ...action.payload.data
          }
      }
      
      case "EMPTY_CURRENT_BULLETIN":
        return {}
      default:
          return state
    }
  }