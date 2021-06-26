import { loadDashboard } from "../../simpleReduxTransitions/loadDashboard";
import { bulletinsAjax } from "./needs/ajax";
import { bulletinsRedux } from "./needs/reduxDispatch";

export const BulletinsDispatch = async (type) => {
  loadDashboard(true)
  const response = await bulletinsAjax(type)
  if (!response.data.error) bulletinsRedux({
    data:
      response.data.map((a) => ({
        unique: a.unique,
        intervenant: a.intervenant ? `${a.intervenant?.nom} ${a.intervenant?.prenom}`:'-',
        date: `${(new Date(a.date)).getDate()}/${(new Date(a.date)).getMonth()}/${(new Date(a.date)).getFullYear()}`,
        montant: a.montant??"-",
        actemedical: a.actemedical?.nom??"-",
        statut: a.statut.status === 0 ? <div className="btn btn-warning text-light">Pending</div> : a.statut.status === 1 ? <div className="btn btn-success text-light">Success</div> : <div className="btn btn-danger text-light">Rejected</div>,
        view:{
          to: "/dashboard/view/bulletin/",
          state: {
            unique: a.unique
          }
        },
        viewable:["view"]
      })),
  })
  loadDashboard(false)
};