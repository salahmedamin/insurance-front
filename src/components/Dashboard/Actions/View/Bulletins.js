import { useEffect } from "react";
import { connect } from "react-redux";
import { BulletinsDispatch } from "../../../../asyncRequests/bulletins/dispatch";
import { Table } from "../../HomeDash/Table";
import { bulletinTableHead } from "../../HomeDash/Table/table_heads"
// import Footer from "../../TableFooter"

const ViewBulletins = ({ bulletins, type }) => {

  useEffect(()=>(async() => {
      await BulletinsDispatch(type)
  })(), [type])


  return (<>
      <Table
        title="Liste des bulletins"
        tableHeads={bulletinTableHead}
        map={bulletins.list}
      />
      {/* <Footer /> */}
      </>
  )
}


export default connect((state) => ({ bulletins: state.bulletins }))(
  ViewBulletins
)
