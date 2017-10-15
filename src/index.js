import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Blocks from "./components/Blocks";
import Services from "./components/Services";
import App from "./containers/App";

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// require('../css/style.css')
// require('../css/common.css')
// require('../css/block.css')
// require('../css/service.css')
// require('../css/flex.css')
// require('../css/svg.css')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Blocks} />
        <Route path="services" component={Services} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
