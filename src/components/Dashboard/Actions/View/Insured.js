import { useEffect } from "react";
import { connect } from "react-redux";
import { insuredDispatch } from "../../../../asyncRequests/insured/dispatch";
import { Table } from "../../HomeDash/Table";
import { insuredTableHead } from "../../HomeDash/Table/table_heads";

const ViewInsured = ({ insured }) => {

  useEffect(()=>(async () => {
      await insuredDispatch();
  })(), []);
  return <Table tableHeads={insuredTableHead} map={insured.list} />
}
export default connect((state) => ({ insured: state.subinsured }))(
  ViewInsured
)
