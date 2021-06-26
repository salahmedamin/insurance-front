import { Route, Switch } from "react-router";
import TypedRoute from "../../../RouteProtection/TypedRoute";
import NotFound from "../../NotFound";
import { AddBulletin } from "./Add/Bulletin";
import AddContract from "./Add/Contract";
import {AddInsured} from "./Add/Insured";

export const Add = () => {
  return (
    <Switch>
      <TypedRoute path="/dashboard/add/insured" type={["assure"]} >
        <AddInsured />
      </TypedRoute>
      <TypedRoute path="/dashboard/add/bulletin" type={["sousassure","assure"]}>
        <AddBulletin />
      </TypedRoute>
      <TypedRoute path="/dashboard/add/contract" type={["entreprise"]}>
        <AddContract />
      </TypedRoute>
      <Route path="*" component={NotFound} />
    </Switch>
  )
}