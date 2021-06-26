import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";
import { contractAjax } from "./needs/ajax";
import { contractRedux } from "./needs/reduxDispatch";

export const contractDispatch = async (unique) => {
  loadDashboard(true)
  const response = await contractAjax(unique)
  if(!response.data.error) contractRedux({data:response.data})
  loadDashboard(false)
};