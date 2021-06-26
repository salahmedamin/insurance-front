import { PersonSVG } from "./Login/icons/person";
import { ManagerSVG } from "./Login/icons/manager";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { ReCAPTCHA } from "react-google-recaptcha";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { loginDispatch } from "../asyncRequests/login/dispatch";
import { Loading } from "../Loading";
// import {loginDispatch} from "./"

function Login() {
  const history = useHistory()
  const [showerror, setshowerror] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const recap = useRef();
  const grecaptcha = window.grecaptcha;
  const [recapResponse, setRecapResponse] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setloading] = useState(false)
  const [type, settype] = useState("");
  useEffect(() => {
    setDisabled(!(recapResponse && type));
  }, [type, recapResponse]);
  const onSubmit = async (data) => {
    setshowerror(false);
    const { username, password } = data;
    setloading(true)
    const res = await loginDispatch(username, password, type, recapResponse);
    setloading(false)
    if (res.success) {
      //redirect
      history.push("/dashboard")
    } else {
      recap.current.reset()
      setshowerror(true);
      seterrorMessage(res.message);
    }
  };
  return (
    <>
      <div className="login-header box-shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="brand-logo">
            <div style={{ cursor: "pointer" }}>
              <img src="vendors/images/deskapp-logo.svg" alt="" />
            </div>
          </div>
          <div className="login-menu">
            <ul>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              <img src="vendors/images/login-page-img.png" alt="" />
            </div>
            <div className="col-md-6 col-lg-5" style={{ position: "relative" }}>
              {loading ?
                <Loading style={{
                  height: "100%",
                  zIndex: 2,
                  width: "100%",
                  position: "absolute",
                  background: "rgb(255,255,255,.8)",
                  top: 0,
                  left: 0,
                }} /> : null}
              <div className="login-box bg-white box-shadow border-radius-10">
                <div className="login-title">
                  <h2 className="text-center text-primary">Login</h2>
                </div>
                {showerror && errorMessage ? (
                  <div className="w-100 text-danger text-center mb-4">
                    {errorMessage}
                  </div>
                ) : null}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="select-role">
                    <div
                      className="btn-group btn-group-toggle m-0"
                      data-toggle="buttons"
                    >
                      <div className="d-flex flex-row justify-content-start mb-4">
                        <label
                          className={
                            "btn col-6 py-3" +
                            (type === "insured" ? " active" : "")
                          }
                          onClick={() => settype("insured")}
                        >
                          <div className="icon">
                            <PersonSVG />
                          </div>
                          Assuré
                        </label>
                        <label
                          className={
                            "btn col-6 py-3" +
                            (type === "employee" ? " active" : "")
                          }
                          onClick={() => settype("employee")}
                        >
                          <div className="icon">
                            <PersonSVG />
                          </div>
                          Employé
                        </label>
                      </div>
                      <label
                        className={
                          "btn col-6 py-3" +
                          (type === "enterprise" ? " active" : "")
                        }
                        onClick={() => settype("enterprise")}
                      >
                        <div className="icon">
                          <ManagerSVG />
                        </div>
                        Entreprise
                      </label>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      {...register("username", { required: true })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="icon-copy dw dw-user1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="**********"
                      {...register("password", { required: true })}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="dw dw-padlock1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="row pb-30">
                    <div className="col-6"></div>
                    <div className="col-6">
                      <div className="forgot-password">
                        <a href="forgot-password.php">Forgot Password</a>
                      </div>
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey="6LdHEv0UAAAAAM3715icjBeTbJG8AnZVqQVkfbnu"
                    onChange={(v) => setRecapResponse(v)}
                    onExpired={() => setRecapResponse()}
                    onErrored={() => setRecapResponse()}
                    ref={recap}
                    grecaptcha={grecaptcha}
                  />
                  <div className="row mt-4">
                    <div className="col-sm-12">
                      <div className="input-group mb-0">
                        <input
                          className="btn btn-primary btn-lg btn-block"
                          type="submit"
                          value="Sign In"
                          disabled={disabled}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
