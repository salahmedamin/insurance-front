import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { AccordionMenu } from "./Sidebar/AccordionDropdown"
import all from "./Sidebar/What_To_Show/all"

const SideBarx = ({ expand, setexpand, type }) => {
    const ref = useRef()
    const outsideclick = (e)=>{
        if(expand && !ref?.current?.contains(e.target)){
            setexpand(false)
        }
    }
  useEffect(() => {
      window.addEventListener("click",outsideclick)
      return () => {
          window.removeEventListener("click",outsideclick)
      }
  }, [expand])
  return (
    <>
      <div ref={ref} className={"left-side-bar" + (expand ? " open" : "")}>
        <div className="brand-logo">
          <Link to="#">
            <img
              src="/vendors/images/deskapp-logo.svg"
              alt=""
              className="dark-logo"
            />
            <img
              src="/vendors/images/deskapp-logo-white.svg"
              alt=""
              className="light-logo"
            />
          </Link>
          <div className="close-sidebar" onClick={() => setexpand(!expand)}>
            <i className="ion-close-round"></i>
          </div>
        </div>
        <div className="menu-block customscroll mCustomScrollbar _mCS_3">
          <div
            id="mCSB_3"
            className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
          >
            <div
              id="mCSB_3_container"
              className="mCSB_container"
              style={{
                position: "relative",
                top: 0,
                left: 0,
              }}
              dir="ltr"
            >
              <div className="sidebar-menu icon-style-1 icon-list-style-1">
                <ul id="accordion-menu">
                  {
                    all[type].map((a,b)=>
                      <AccordionMenu key={b} {...a} />
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"mobile-menu-overlay" + (expand ? " show" : "")}></div>
    </>
  )
}

export const SideBar = connect(state=>({type:state.auth.type}))(SideBarx)