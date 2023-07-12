import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import withRouter from "src/hooks/withRouter";
import AppRouter from "./AppRouter";
import Header from "src/components/header";

import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <AppRouter />
      </ScrollToTop>
    </Router>
  );
}
