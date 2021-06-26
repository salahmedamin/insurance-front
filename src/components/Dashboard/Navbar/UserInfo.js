import { connect } from "react-redux";
import { ExpandProfile } from "./UserInfo/ExpandProfile";
const UserInfox = ({expandProfile,setexpandProfile,name}) => (
  <div className="user-info-dropdown">
    <div
      className={"dropdown" + (expandProfile ? " show" : "")}
      onClick={() => setexpandProfile(!expandProfile)}
    >
      <div className="dropdown-toggle" style={{cursor:"pointer"}}>
        <span className="user-icon">
          <img src="/vendors/images/photo1.jpg" alt="" />
        </span>
        <span className="user-name">{name}</span>
      </div>
      {expandProfile ? <ExpandProfile /> : null}
    </div>
  </div>
)
export const UserInfo = connect(state=>({name: `${state.auth.nom} ${state.auth.prenom??''}`}))(UserInfox)