import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";
import { medicalActsAjax } from "./needs/ajax";
import { medicalActsRedux } from "./needs/reduxDispatch";

export const medicalActsDispatch = async () => {
    loadDashboard(true)
    const response = await medicalActsAjax()
    if(!response.error) medicalActsRedux(response)
    loadDashboard(false)
};