import { store } from "../../redux/store";
// import { contractsShouldReload } from "../../simpleReduxTransitions/contractsShouldReload";
import { contractsAjax } from "./needs/ajax";
import { contractsRedux } from "./needs/reduxDispatch";

export const contractsDispatch = async (status) => {
  const response = await contractsAjax(status);
  contractsRedux({
    data: response.data.map((a) => ({
      unique: a.unique,
      start: `${new Date(a.start).getDate()}/${new Date(a.start).getMonth() + 1}/${new Date(a.start).getFullYear()}`,
      end: `${new Date(parseInt(a.end)).getDate()}/${new Date(parseInt(a.end)).getMonth() + 1}/${new Date(parseInt(a.end)).getFullYear()}`,
      offer: a.offer.name.toUpperCase(),
      plafond: a.offer.plafond + "DT",
      status:
        new Date(parseInt(a.end)).getTime() > Date.now() ? <div className="text-success">Actif</div> : <div className="text-danger">Expiré</div>,
      liste: {
        to: "/dashboard/view/contract/list",
        state: {
          unique: a.unique,
        },
        onClick: () =>
          store.dispatch({
            type: "SET_CURRENT_CONTRACT",
            payload: {
              data: {
                unique: a.unique
              }
            },
          }),
      },
      id: a.id,
      viewable: ["liste"],
    })),
  });
};
