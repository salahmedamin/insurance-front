import { store } from "../../../redux/store";

export const medicalActsRedux = (data)=> store.dispatch({
    type:"SET_MEDICAL_ACTS",
    payload:{
        data
    }
})