import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import Footer from "Views/Footer";

import store from "Redux";

import "Assets/Style/global.css";

const loadRoute = (route: string): React.FC =>
  React.lazy(() => import(`Views/${route}`));

const Router: React.FC = () => (
  <Suspense fallback={<div />}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={loadRoute("Home")} />
          <Footer />
        </Switch>
      </BrowserRouter>
    </Provider>
  </Suspense>
);

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.register();
