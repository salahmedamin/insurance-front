import { store } from "../../../redux/store";

export const deleteInsuredRedux = (id)=> store.dispatch({
    type:"DELETE_INSURED",
    payload:{
        id
    }
})