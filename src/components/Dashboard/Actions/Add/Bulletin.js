import { createBulletinAjax } from "../../../../asyncRequests/genBulletin/ajax"
import { useHistory } from "react-router-dom"
import { useState } from "react"

export const AddBulletin = () => {
    const [error, seterror] = useState(null)
    const history = useHistory()
    return (<div className="pd-20 card-box mb-30 position-relative">
        <div className="clearfix mb-4">
            <div className="pull-left">
                <h4 className="text-dark h4">GENERATE NEW BULLETIN{error ? <span style={{ fontSize: 14, fontWeight: "bold", marginLeft: 20, color: "firebrick", textTransform: "uppercase" }}>{error}</span> : null}</h4>
            </div>
        </div>
        <form className="d-flex flex-column" onSubmit={async (e) => {
            e.preventDefault()
            const data = (await createBulletinAjax()).data
            if (!data.error) {
                seterror(null)
                history.push({
                    state: {
                        unique: data.unique
                    },
                    pathname:"/dashboard/view/bulletin"
                })
            }
            else {
                seterror(data.message)
            }
        }}>
            <div className="clearfix my-3">
                <div className="pull-right">
                    <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Generate now"
                    />
                </div>
            </div>
        </form>
    </div>
    )
}