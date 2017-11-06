import React from "react";
import Service from "../../components/Service";

import block from "bem-cn";
const b = block("services");
import "./Services.scss";

export default function Services({ page, toggleSelected }) {
  const container = Object.keys(page).map(index => (
    <Service key={index} value={page[index]} toggleSelected={toggleSelected} />
  ));
  return (
    <div className={b}>
      <div className={b("wrapper")}>
        <div className={b("scroll")}>{container}</div>
      </div>
    </div>
  );
}
