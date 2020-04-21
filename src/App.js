import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import classnames from "classnames";

import Routes from "./Routes";

import NavMenu from "./Components/NavMenu";
import SidebarMenu from "./Components/Sidebar";

import { site } from "./config";

import "./App.scss";

function App() {
  let location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { pathname } = location;
  const shouldDisplayHeaderNav =
    pathname !== "/login" && pathname !== "/register";
  const shouldDipslaySideBarNav =
    pathname !== "/login" && pathname !== "/register";

  const appClassNames = classnames("App", "serein-admin", {
    "without-header-nav": !shouldDisplayHeaderNav,
    "without-sidebar-nav": !shouldDipslaySideBarNav,
    "sidebar-small": sidebarCollapsed,
  });

  const handleClickOnSideBarCollapseButton = () =>
    setSidebarCollapsed(!sidebarCollapsed);
  return (
    <div className={appClassNames}>
      <header className="App-header">
        {shouldDisplayHeaderNav && (
          <NavMenu
            onClickSidebarToggleButton={handleClickOnSideBarCollapseButton}
          />
        )}
      </header>

      {shouldDipslaySideBarNav && (
        <>
          <div className="sidebar">
            <div className="sidebar__header">
              <h1 className="sidebar__header__title">{site.name}</h1>
            </div>
            <div className="sidebar__inner">
              <SidebarMenu />
            </div>
          </div>
          <main role="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <Routes />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
      {!shouldDipslaySideBarNav && (
        <main
          role="main"
          className="col-md-12 ml-sm-auto col-lg-12 d-flex align-content-center justify-content-center full-page-centered-content"
        >
          <Routes />
        </main>
      )}
    </div>
  );
}

export default App;
