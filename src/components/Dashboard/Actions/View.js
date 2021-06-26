import { Route, Switch, useHistory } from "react-router";
import TypedRoute from "../../../RouteProtection/TypedRoute";
import NotFound from "../../NotFound";
import ViewContract from "./View/Contract";
import ViewContracts from "./View/Contracts";
import ViewEmployees from "./View/Employees";
import ViewBulletins from "./View/Bulletins";
import { ViewMedicalActs } from "./View/MedicalActs"
import ViewInsured from "./View/Insured"
import {ViewBulletin} from "./View/Bulletin"

//ROUTES

//IMPORT COMPONENTS HERE
//

export const View = () => {
  const his = useHistory()
  return (
    <Switch>
      <TypedRoute
        path="/dashboard/view/employees"
        type={["entreprise"]}>
          <ViewEmployees />
        </TypedRoute>


      <TypedRoute path="/dashboard/view/insured" type={["assure"]}>
        <ViewInsured />
      </TypedRoute>

      <TypedRoute path="/dashboard/view/bulletins/:type?" type={["sousassure", "assure"]}
        render={(props) =>
          <ViewBulletins type={props.match.params.type} />
        }
      />

      <TypedRoute path="/dashboard/view/bulletin/" type={["sousassure", "assure"]}
        render={(props) => props.location?.state?.unique ?
          <ViewBulletin unique={props.location?.state?.unique} />
          :
          his.push("/dashboard")
        }
      />

      <TypedRoute
        path="/dashboard/view/contract/:showList?"
        type={["entreprise"]}
        render={(props) => (
          <ViewContract
            unique={props.location?.state?.unique}
            showList={props.match.params.showList}
          />
        )}
      />

      <TypedRoute
        path="/dashboard/view/contracts/:type?"
        type={["entreprise"]}
        render={(props) => <ViewContracts type={props.match.params.type} />}
      />

      <TypedRoute
        path="/dashboard/view/medical-acts"
        type={["assure", "sousassure"]}
      >
        <ViewMedicalActs />
      </TypedRoute>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
