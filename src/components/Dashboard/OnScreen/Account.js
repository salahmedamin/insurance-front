import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { store } from "../../../redux/store"

export const AccountOnScreen = () => {
    const ref = useRef()
    const {username,password,title} = useSelector(state=>state.global.onScreenData )
    const listen = e => {
        if (!ref.current?.contains(e.target)) {
            store.dispatch({
                type: "GLOBAL_SET_ONSCREEN",
                payload: {
                    data: {}
                }
            })
        }
    }
    useEffect(() => {
        window.addEventListener("click", listen)
        return () => {
            window.removeEventListener("click", listen)
        }
    }, [])
    return (
        <div ref={ref} className="col-11 col-md-6 bg-dark p-4 rounded">
            <div className="col-12 mb-30">
                <div className="title">
                    <span className="text-light">{title} ACCOUNT</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="text-light">USERNAME :</label>
                        <input type="text" value={username} className={`form-control`} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="text-light">PASSWORD :</label>
                        <input type="text" value={password} className={`form-control`} />
                    </div>
                </div>
                <div className="col-12">
                    <h6 style={{fontSize:10,color:"white",fontWeight:"lighter"}}>HINT: You still can see the account details as long the owner hasn't changed them.</h6>
                </div>
            </div>

        </div>
    )
}