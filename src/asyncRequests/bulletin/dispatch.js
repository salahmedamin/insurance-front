import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";
import { viewBulletinAjax } from "./needs/ajax";
import { viewBulletinRedux } from "./needs/reduxDispatch";


export const viewBulletinDispatch = async (unique) => {
  loadDashboard(true)
  const res = await viewBulletinAjax(unique)
  if(!res.error) viewBulletinRedux({data:res})
  else return false
  loadDashboard(false)
  return res
};
