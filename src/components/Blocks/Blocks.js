import React from "react";
import Block from "../../components/Block";

import block from "bem-cn";
const b = block("blocks");
import "./Blocks.scss";

export default function Blocks({ page, countMinus, countPlus, blockDelete }) {
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
