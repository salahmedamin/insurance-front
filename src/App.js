//CSS
import "./App.css";

//ROUTER
import { Route, Switch, withRouter } from "react-router-dom";

//REACT
import React, { useEffect } from "react";

//DISPATCHES
import { checkTokenDispatch } from "./asyncRequests/checkToken/dispatch";
import { connect } from "react-redux";

//COOKIES MANAGER
import { cookies } from "./cookies";

//ROUTING
import Signup from "./components/Signup";
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import ProtectedPath from "./RouteProtection/ProtectedPath";
import { store } from "./redux/store";
import { Loading } from "./Loading";
import { logout } from "./asyncRequests/checkToken/needs/reduxDispatch";
import { loadDashboard } from "./simpleReduxTransitions/loadDashboard";

function App({ auth, history, isLoading }) {
  require("dotenv").config();

  useEffect(() => {
    const token = cookies.getCookie("token");
    if (auth.isLogged === null) {
      if (!token) {
        store.dispatch({ type: "SET_LOGGED_OUT"});
        store.dispatch({ type: "GLOBAL_LOADING", payload: { data: false } });
      } else
        checkTokenDispatch(token).then((v) => {
          if(!v) history.push("/login");
          store.dispatch({ type: "GLOBAL_LOADING", payload: { data: false } });
        });
    }
  }, [auth.isLogged, history])

  return isLoading ? (
    <Loading />
  ) : (
    <Switch>
      <Route path="/" exact render={()=>history.push("/login")} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/resetpass" component={ResetPass} />
      <ProtectedPath path="/dashboard">
        <Dashboard />
      </ProtectedPath>
      <Route path="/logout" render={async()=>{
        const token = cookies.getCookie("token")
        if(token){
          loadDashboard(true)
          await logout(token)
          cookies.eraseCookie("token")
          loadDashboard(false)
        }
        window.location.href = "/login"
      }} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default withRouter(
  connect((state) => ({ auth: state.auth, isLoading: state.global.isLoading }))(
    App
  )
);
