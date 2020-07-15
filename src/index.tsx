import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import Footer from "Views/Footer";

import "Assets/Style/global.css";

const loadRoute = (route: string): React.FC => {
  const Element = React.lazy(() => import(`Views/${route}`));

  const ElementWithLayout: React.FC = () => (
    <>
      <Element />
      <Footer />
    </>
  );

  return ElementWithLayout;
};

const Router: React.FC = () => (
  <Suspense fallback={<div />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="" component={loadRoute("Home")} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.register();
