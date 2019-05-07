import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  const { items, removeItem } = props;
  return (
    <table>
      <TableHeader />
      <TableBody items={items} removeItem={removeItem} />
    </table>
  );
}

export default Table;
