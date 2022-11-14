import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import { contractDispatch } from "../../../../asyncRequests/contract/dispatch";
import { employeesDispatch } from "../../../../asyncRequests/employees/dispatch";
import { Contract } from "../../../../Templates/Contract";
import NotFound from "../../../NotFound";
import { Table } from "../../HomeDash/Table";
import { employeeTableHead } from "../../HomeDash/Table/table_heads";

const ViewContract = ({ employees, unique, currentContract, showList }) => {
  const history = useHistory();
  useEffect(() => window.history.replaceState({}, document.title), []);
  useEffect(() => {
    if (!unique && !currentContract?.unique) {
      history.push("/dashboard/view/contracts");
    } else if (
      unique !== currentContract?.unique ||
      (currentContract?.unique && !currentContract.id)
    ) {
      contractDispatch(unique || currentContract.unique);
    } else if (showList) {
      employeesDispatch(unique);
    }
  }, [currentContract.unique, currentContract.id, history, showList, unique]);
  return (
    <Switch>
      <Route path="/dashboard/view/contract" exact>
        <div
          className="col-12 py-4 d-flex justify-content-center align-items-center"
          style={{ height: "fit-content", marginTop: 60 }}
        >
          <Contract {...currentContract} />
        </div>
      </Route>
      <Route path="/dashboard/view/contract/list">
        <Table tableHeads={employeeTableHead} map={employees.list} />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default connect((state) => ({
  employees: state.employees,
  currentContract: state.currentContract,
}))(ViewContract);
