import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";

import block from "bem-cn";
const b = block("service");
import "./Service.scss";

export default class Service extends Component {
  render() {
    const { index, value, toggleSelected } = this.props;
    const { id, selected, color, cost, name } = value;
    return (
      <div onClick={() => toggleSelected(id)} className={b}>
        <div className={b("icon", { [name]: !!name, selected })} />
        <div className={b("bottom")}>
          <div
            className={b("name", { selected: selected, unselected: !selected })}
          >
            {name}
          </div>
          <div
            className={b("cost", { selected: selected, unselected: !selected })}
          >
            {cost} р
          </div>
        </div>
      </div>
    );
  }
}
