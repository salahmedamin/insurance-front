import { useEffect } from "react";
import { connect } from "react-redux";
import { employeesDispatch } from "../../../../asyncRequests/employees/dispatch";
import { loadDashboard } from "../../../../simpleReduxTransitions/loadDashboard";
import { Table } from "../../HomeDash/Table";
import { employeeTableHead } from "../../HomeDash/Table/table_heads";

const ViewEmployees = ({ employees }) => {

  useEffect(()=>(async () => {
      // if(employees.list.length > 0 && !check )return;
      loadDashboard(true);
      await employeesDispatch();
      loadDashboard(false)
  })(), []);
  return <Table tableHeads={employeeTableHead} map={employees.list} />;
};
export default connect((state) => ({ employees: state.employees }))(
  ViewEmployees
);
