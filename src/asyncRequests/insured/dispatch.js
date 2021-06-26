import { store } from "../../redux/store";
import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";
import { deleteInsuredDispatch } from "../delete_insured/dispatch";
import { insuredAjax } from "./needs/ajax";
import { insuredRedux } from "./needs/reduxDispatch";

export const insuredDispatch = async () => {
    loadDashboard(true)
    const response = await insuredAjax()
    const newResp = response.map(a=>{
        const data = {
            username: a.account.generatedUsername,
            password: a.account.generatedPassword,
            title:"INSURED"
        }
        a.action = {
            delete:{
                text:"Delete",
                onClick:async ()=>await deleteInsuredDispatch(a.id)
            },
            see: !a.account.changedPass ? {
                text:"Account",
                onClick:()=>store.dispatch({
                    type:"GLOBAL_SET_ONSCREEN",
                    payload:{
                        data
                    }
                })
            }
            :
            null
        }
        delete a.account
        delete a.insurerID
        return a
    })
    if(!response.error) insuredRedux(newResp)
    loadDashboard(false)
};
