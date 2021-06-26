import { store } from "../../../redux/store";

export const bulletinsRedux = ({data})=> store.dispatch({
    type:"SET_BULLETINS",
    payload:{
        data
    }
})