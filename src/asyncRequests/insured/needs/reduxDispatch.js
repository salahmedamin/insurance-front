import { store } from "../../../redux/store";

export const insuredRedux = (data)=> store.dispatch({
    type:"SET_INSURED",
    payload:{
        data
    }
})