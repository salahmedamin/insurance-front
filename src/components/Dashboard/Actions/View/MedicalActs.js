import { useEffect } from "react"
import { useSelector } from "react-redux"
import { medicalActsDispatch } from "../../../../asyncRequests/medicalActs/dispatch"
import { Option } from "../../HomeDash/Options/Option"
export const ViewMedicalActs = () => {
    const acts = useSelector(state => ({ list: state.medical_acts.list }))
    useEffect(() => (async () => medicalActsDispatch())()
        , [])
    return (
        <>
            <div className="page-header">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="title">
                            <h4>COVERED MEDICAL ACTS</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    acts.list?.map((a, b) =>
                        <Option title={a.nom?.toUpperCase()} to={"#"} text={<span style={{ fontSize: 12, color: "var(--dark)" }}>CODE: <span style={{ color: "var(--success)" }}>{a.code}</span></span>} key={b} />
                    )
                }
            </div>
        </>
    )
}