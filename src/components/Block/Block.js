import React from "react";

import block from "bem-cn";
const b = block("block");
import "./Block.scss";

export default function Block({
  index,
  value,
  countMinus,
  countPlus,
  blockDelete
}) {
  const { id, count, color, cost, name } = value;

  return (
    <div className={b}>
      <span className={b("text", { selectedName: !!count, name: !count })}>
        {name}
      </span>
      <span className={b("text", { selectedCost: !!count, cost: !count })}>
        {cost} р
      </span>
      <span className={b("text", { selectedCount: !!count, count: !count })}>
        {count} шт
      </span>
      <span className={b("text", { selectedSumm: !!count, summ: !count })}>
        {cost * count} р
      </span>

      <div className={b("actions")}>
        <span
          className={b("button", { minus: true })}
          onClick={() => countMinus(id)}
        >
          -
        </span>
        <span
          className={b("button", { plus: true })}
          onClick={() => countPlus(id)}
        >
          +
        </span>
        <span
          className={b("button", { delete: true })}
          onClick={() => blockDelete(id)}
        >
          x
        </span>
      </div>
    </div>
  );
}
