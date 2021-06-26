const init = {
    isLoading: true,
    dashboardLoading: false,
    showOnScreen: false,
    onScreenData:{}
  };
  export const global = (state = init, action) => {
    switch (action.type) {
      case "GLOBAL_LOADING": {
          return {
            ...state,
            isLoading: action.payload.data
          }
      }
      case "GLOBAL_DASHBOARD_LOADING": {
          return {
            ...state,
            dashboardLoading: action.payload.data
          }
      }
      case "GLOBAL_SET_ONSCREEN":
        return{
          ...state,
          showOnScreen: Object.keys(action.payload?.data).length>0 ? true : false,
          onScreenData: action.payload.data
        }
      default:
          return state
    }
  }