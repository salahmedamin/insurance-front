import { store } from "../redux/store";

export const employeesShouldReload = (v)=>store.dispatch({
    type:"SET_SHOULD_RELOAD",
    payload:{
        data : v
    }
})