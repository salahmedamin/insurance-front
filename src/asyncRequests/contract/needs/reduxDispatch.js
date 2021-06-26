import { store } from "../../../redux/store";

export const contractRedux = ({data})=> store.dispatch({
    type:"SET_CURRENT_CONTRACT",
    payload:{
        data
    }
})