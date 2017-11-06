import React from "react";

import block from "bem-cn";
const b = block("service");
import "./Service.scss";

export default function Service({ index, value, toggleSelected }) {
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
