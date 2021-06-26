import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Add } from "./Dashboard/Actions/Add";
import { Container } from "./Dashboard/Container";
import { Navbar } from "./Dashboard/Navbar";
import { SideBar } from "./Dashboard/Sidebar";
import { View } from "./Dashboard/Actions/View";
import NotFound from "./NotFound";
import { HomeDash } from "./Dashboard/HomeDash";
import { Loading } from "../Loading";
import { OnScreen } from "./Dashboard/OnScreen";
import {AccountOnScreen} from "./Dashboard/OnScreen/Account"
import { useSelector } from "react-redux";

function Dashboard() {
  const [expandSideBar, setexpandSideBar] = useState(false);
  const {dashboardLoading, showOnScreen, onScreenData} = useSelector(state=>state.global)
  return (
    <>
    
      <Navbar
        setexpandSideBar={setexpandSideBar}
        expandSideBar={expandSideBar}
      />
      <SideBar expand={expandSideBar} setexpand={setexpandSideBar} />
      <Container style={showOnScreen ? {position:"relative"} : null}>
        {
          showOnScreen ?
          <OnScreen
          style={{
              height: "100%",
              zIndex: 2,
              width: "100%",
              position: "absolute",
              background: "rgb(255,255,255,.8)",
              top: 0,
              left: 0,
            }}
          >
            <AccountOnScreen />
          </OnScreen>
        :
        dashboardLoading ? (
          <Loading
            style={{
              height: "100%",
              zIndex: 2,
              width: "100%",
              position: "absolute",
              background: "rgb(255,255,255,.8)",
              top: 0,
              left: 0,
            }}
          />
        ) : null}
        <Switch>
          <Route path="/dashboard/" exact>
            <HomeDash />
          </Route>
          <Route path="/dashboard/add">
            <Add />
          </Route>
          <Route path="/dashboard/view">
            <View />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default Dashboard
