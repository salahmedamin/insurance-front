import { store } from "../../../redux/store";

export const employeesRedux = ({data})=> store.dispatch({
    type:"SET_EMPLOYEES",
    payload:{
        data
    }
})