import { useEffect } from "react";
import { connect } from "react-redux";
import { contractsDispatch } from "../../../../asyncRequests/contracts/dispatch";
import { loadDashboard } from "../../../../simpleReduxTransitions/loadDashboard";
import { Table } from "../../HomeDash/Table";
import { contractTableHead } from "../../HomeDash/Table/table_heads"
// import Footer from "../../TableFooter"

const ViewContracts = ({ contracts, type }) => {
  

  useEffect(()=>(async() => {
      loadDashboard(true)
      await contractsDispatch(type)
      loadDashboard(false)
  })(), [type])


  return (<>
      <Table
        title="Liste des contrats"
        tableHeads={contractTableHead}
        map={contracts.list}
      />
      {/* <Footer /> */}
      </>
  )
}


export default connect((state) => ({ contracts: state.contracts }))(
  ViewContracts
)
