import { useState } from "react";
import { connect } from "react-redux";
import { UserInfo } from "./Navbar/UserInfo";

export const Navbar = connect(state=>({type:state.auth.type}))(({setexpandSideBar,expandSideBar,type}) => {
    const [expandProfile, setexpandProfile] = useState(false)
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon dw dw-menu" onClick={()=>setexpandSideBar(!expandSideBar)}></div>
      </div>
      <div className="header-right">
        <UserInfo expandProfile={expandProfile} setexpandProfile={setexpandProfile} />
      </div>
    </div>
  );
})
