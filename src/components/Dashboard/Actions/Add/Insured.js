import { useForm } from "react-hook-form";
import axios from "axios"
import { cookies } from "../../../../cookies";
import { useState } from "react";
import { store } from "../../../../redux/store";
import { loadDashboard } from "../../../../simpleReduxTransitions/loadDashboard";

function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}

export const AddInsured = () => {
    const [error, seterror] = useState(null)
    const onSubmit = async(data)=>{
        loadDashboard(true)
        const res = await axios.post(
            process.env.REACT_APP_ENDPOINT+"/assure/addSubInsured",
            {
                ...data,
                matricule: parseInt(data.matricule),
                lienParente: parseInt(data.lienParente)
            },
            {
                headers:{
                    authorization: cookies.getCookie("token")
                }
            }
        )
        if(res.data.success){
            store.dispatch({
                type:"GLOBAL_SET_ONSCREEN",
                payload:{
                    data: res.data.account
                }
            })
            seterror(null)
        }
        else{
            seterror(res.data.message)
        }
        loadDashboard(false)
    }
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (<>
        <div className="page-header">
            <div className="row">
                <div className="col-12">
                    <div className="title">
                        <h4>ADD INSURED{error ? <span className="ml-2 text-dark" style={{fontSize:12}}>{error}</span> : null }</h4>
                    </div>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="col-12 px-md-0">
            <div className="pd-20 card-box mb-30">

                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>MATRICULE :</label>
                            <input type="text" className={`form-control${errors.matricule ? " border border-danger" : ""}`} {...register("matricule", { maxLength: 8, minLength: 8, required: true, pattern: /[0-9]/ })} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>FIRST NAME :</label>
                            <input type="text" className={`form-control${errors.nom ? " border border-danger" : ""}`} {...register("nom", { required: true, pattern: /^[a-zA-Z ]+$/ })} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>LAST NAME :</label>
                            <input type="text" className={`form-control${errors.prenom ? " border border-danger" : ""}`} {...register("prenom", { required: true, pattern: /^[a-zA-Z ]+$/ })} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>GENDER :</label>
                            <select className="form-control" {...register("sexe")}>
                                <option selected value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>DATE OF BIRTH :</label>
                            <input type="date" className={`form-control${errors.dateNaiss ? " border border-danger" : ""}`} {...register("dateNaiss",{validate:date=>calcAge(String(date)) >= 0})} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>PARENTAL LINK :</label>
                            <select className="form-control" {...register("lienParente")} >
                                <option selected value={0} selected>0: Pére</option>
                                <option value={99}>99: Mére</option>
                                {
                                    Array.from(Array(98).keys()).map((a,b)=>
                                        <option key={b} value={a}>{a+1}{a+1 === 1 ? "er":"éme"} Enfant</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="clearfix my-3">
                    <div className="pull-right">
                        <input
                            type="submit"
                            className="btn btn-outline-dark"
                            value="ADD INSURED"
                        />
                    </div>
                </div>
            </div>
        </form>
    </>
    )
}