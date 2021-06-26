import { connect } from "react-redux"

const Welcome = ({name})=><div className="card-box pd-20 height-100-p mb-30">
<div className="row align-items-center">
    <div className="col-md-4">
        <img src="vendors/images/banner-img.png" alt=""/>
    </div>
    <div className="col-md-8">
        <h4 className="font-20 weight-500 mb-10 text-capitalize">
            Welcome back <div className="weight-600 font-30 text-dark">{name}</div>
        </h4>
        <p className="font-18 max-width-600">
        This is your dashboard, you can see what you have recently done, are doing or will do !
        </p>
    </div>
</div>
</div>

export default connect(state=>({name:`${state.auth.nom} ${state.auth.prenom??''}`}))(Welcome)