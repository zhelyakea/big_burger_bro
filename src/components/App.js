import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import Block from "../components/Block";
import { countMinus, countPlus, blockDelete } from "../actions/PageAction";

import block from "bem-cn";
const b = block("app");
import "./App.scss";

class App extends Component {
  render() {
    const { page, countMinus, countPlus, blockDelete } = this.props;

    const container = Object.keys(page).map(id => {
      switch (page[id].selected) {
        case true:
          return (
            <Block
              key={id}
              value={page[id]}
              countMinus={countMinus}
              countPlus={countPlus}
              blockDelete={blockDelete}
            />
          );
          break;
      }
    });
    return (
      <div className={b}>
        <div className={b("wrapper")}>
          <div className={b("scroll")}>{container}</div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  page: PropTypes.object.isRequired
};
export default connect(({ page }) => ({ page }), {
  countMinus,
  countPlus,
  blockDelete
})(App);
