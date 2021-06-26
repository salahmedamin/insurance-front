import { Link } from "react-router-dom";

export const ExpandProfile = ()=>
<div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list show">
  <Link className="dropdown-item" to="/logout">
    <i className="dw dw-logout"></i> Log Out
  </Link>
</div>