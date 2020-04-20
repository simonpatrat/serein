import React from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

import Routes from "./Routes";

import NavMenu from "./Components/NavMenu";
import SidebarMenu from "./Components/Sidebar";

import "./App.scss";

function App() {
  let location = useLocation();
  const { pathname } = location;
  const shouldDisplayHeaderNav =
    pathname !== "/login" && pathname !== "/register";
  const shouldDipslaySideBarNav =
    pathname !== "/login" && pathname !== "/register";

  const appClassNames = classnames("App", "serein-admin", {
    "without-header-nav": !shouldDisplayHeaderNav,
    "without-sidebar-nav": !shouldDipslaySideBarNav,
  });

  return (
    <div className={appClassNames}>
      <header className="App-header">
        {shouldDisplayHeaderNav && <NavMenu />}
      </header>
      <div className="container-fluid">
        <div className="row">
          {shouldDipslaySideBarNav && (
            <>
              <div className="col-md-2 bg-light-paper-darken d-none d-md-block sidebar">
                <div className="left-sidebar">
                  <SidebarMenu />
                </div>
              </div>
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Routes />
              </main>
            </>
          )}
          {!shouldDipslaySideBarNav && (
            <main
              role="main"
              className="col-md-12 ml-sm-auto col-lg-12 px-4 d-flex align-content-center justify-content-center"
            >
              <Routes />
            </main>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
