import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";
import { deleteInsuredAjax } from "./needs/ajax";
import { deleteInsuredRedux } from "./needs/reduxDispatch";

export const deleteInsuredDispatch = async (id) => {
    loadDashboard(true)
    const response = await deleteInsuredAjax(id)
    if(!response.error) deleteInsuredRedux(id)
    loadDashboard(false)
};
