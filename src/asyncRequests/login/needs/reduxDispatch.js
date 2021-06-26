import { store } from "../../../redux/store";

export const loginRedux = (data)=> store.dispatch({
    type:"SET_LOGGED_IN",
    payload:{
        data
    }
})