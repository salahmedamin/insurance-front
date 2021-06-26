import { store } from "../../../redux/store";

export const viewBulletinRedux = ({data})=> store.dispatch({
    type:"SET_CURRENT_BULLETIN",
    payload:{
        data
    }
})