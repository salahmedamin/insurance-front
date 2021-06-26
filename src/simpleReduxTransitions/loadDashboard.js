import { store } from "../redux/store";

export const loadDashboard = (v)=>store.dispatch({
    type:"GLOBAL_DASHBOARD_LOADING",
    payload:{
      data: v
    }
  })