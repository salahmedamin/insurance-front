import { store } from "../../redux/store";
import { employeesAjax } from "./needs/ajax";
import { employeesRedux } from "./needs/reduxDispatch";

export const employeesDispatch = async (unique = null) => {
  
  const response = await employeesAjax(unique);
  employeesRedux({
    data: response.data.map((a) => {
      const dat = new Date(a.dateNaiss)
      const data = {
        username: a.account.generatedUsername,
        password: a.account.generatedPassword,
        title:"EMPLOYEE"
      }
      return {
        matricule: a.matricule,
        nom: a.nom.toUpperCase(),
        prenom: a.prenom.toUpperCase(),
        sexe: a.sexe.toUpperCase(),
        dateNaiss: `${dat.getDate()}/${dat.getMonth() + 1}/${dat.getFullYear()}`,
        contrat: {
          to: "/dashboard/view/contract/",
          state: {
            unique: unique || a.contract.unique,
          },
          // onClick: async()=>{
          //   loadDashboard(true)
          //   await contractDispatch(unique||a.contract.unique)
          //   loadDashboard(false)
          // }
        },
        id: a.id,
        viewable: ["contrat"],
        action: {
          see: !a.account.changedPass ? {
            text:"Account",
            onClick: ()=>store.dispatch({
              type:"GLOBAL_SET_ONSCREEN",
              payload:{
                data
              }
            })
          } : null
        },
      };
    }),
  });
  
};
