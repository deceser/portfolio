import React from "react";
import { Route, Routes } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "src/pages/home";
import withRouter from "src/hooks/withRouter";
import SocialIcons from "src/components/socialIcons";

import { routes } from "src/routes";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        {routes.map((r) => (
          <Route path={r.path} element={<r.component />} key={r.path} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRouter() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <SocialIcons />
    </div>
  );
}

export default AppRouter;
