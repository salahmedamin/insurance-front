import { connect } from "react-redux";
import {Option} from "./Options/Option"

const options = {
  entreprise: [
    {
      text: "",
      title: "Employees",
      to: "/dashboard/view/employees"
    },
    {
      text: "All",
      title: "Contracts",
      to: "/dashboard/view/contracts",
      className: "text-primary"
    },
    {
      text: "ACTIVE",
      title: "Contracts",
      to: "/dashboard/view/contracts/active",
      className: "text-success"
    },
    {
      text: "EXPIRED",
      title: "Contracts",
      to: "/dashboard/view/contracts/expired",
      className: "text-danger"
    },

  ],
  assure: [
    {
      text: "",
      title: "Assuré",
      to: "/dashboard/view/insured"
    },
    {
      text: "",
      title: "Nouveau(x) Assuré(s)",
      to: "/dashboard/add/insured",
    },
    {
      text: "",
      title: "Nouveau Bulletin",
      to: "/dashboard/add/bulletin",
    },
    {
      text: "Tout",
      title: "Bulletins",
      to: "/dashboard/view/bulletins",
    },
    {
      text: "Remboursés",
      title: "Bulletins",
      to: "/dashboard/view/bulletins/accepted",
      className: "text-success"
    },
    {
      text: "En attente",
      title: "Bulletins",
      to: "/dashboard/view/bulletins/pending",
      className: "text-warning"
    },
    {
      text: "Rejetés",
      title: "Bulletins",
      to: "/dashboard/view/bulletins/rejected",
      className: "text-danger"
    },
  ],
  sousassure:[
    {
      title:"Medical Acts",
      to: "/dashboard/view/medical-acts",
    },
    {
      text: "",
      title: "Nouveau Bulletin",
      to: "/dashboard/add/bulletin",
    },
    {
      text: "Tout",
      title: "Bulletins",
      to: "/dashboard/view/bulletins",
    },
    {
      text: "Remboursés",
      title: "Bulletins",
      to: "/dashboard/view/bulletins/accepted",
      className: "text-success"
    },
    {
      text: "En attente",
      title: "Bulletins",
      to: "/dashboard/view/bulletins/pending",
      className: "text-warning"
    },
    {
      text: "Rejetés",
      title: "Bulletins",
      to: "/dashboard/view/bulletins/rejected",
      className: "text-danger"
    },
  ]
};
const Options = ({ type }) => (
  <div className="row">
    {
      options[type]?.map((a, b) =>
        <Option {...a} key={b} />
      )
    }
  </div>
)

export default connect(state => ({ type: state.auth.type }))(Options)