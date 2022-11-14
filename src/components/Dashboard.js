import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { Loading } from "../Loading";
import { Add } from "./Dashboard/Actions/Add";
import { View } from "./Dashboard/Actions/View";
import { Container } from "./Dashboard/Container";
import { HomeDash } from "./Dashboard/HomeDash";
import { Navbar } from "./Dashboard/Navbar";
import { OnScreen } from "./Dashboard/OnScreen";
import { AccountOnScreen } from "./Dashboard/OnScreen/Account";
import { SideBar } from "./Dashboard/Sidebar";
import NotFound from "./NotFound";

function Dashboard() {
  const [expandSideBar, setexpandSideBar] = useState(false);
  const { dashboardLoading, showOnScreen } = useSelector(
    (state) => state.global
  );
  return (
    <>
      <Navbar
        setexpandSideBar={setexpandSideBar}
        expandSideBar={expandSideBar}
      />
      <SideBar expand={expandSideBar} setexpand={setexpandSideBar} />
      <Container style={showOnScreen ? { position: "relative" } : null}>
        {showOnScreen ? (
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
        ) : dashboardLoading ? (
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

export default Dashboard;
