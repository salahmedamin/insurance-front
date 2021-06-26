import { store } from "../../../redux/store";

export const contractsRedux = ({data})=> store.dispatch({
    type:"SET_CONTRACTS",
    payload:{
        data
    }
})