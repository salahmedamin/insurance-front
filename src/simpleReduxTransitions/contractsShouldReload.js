import { store } from "../redux/store";

export const contractsShouldReload = (v)=>store.dispatch({
    type:"CONTRACTS_SHOULD_RELOAD",
    payload:{
        data:v
    }
})