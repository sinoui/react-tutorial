import React from "react";

function TableBody(props) {
  const { items, removeItem } = props;
  const rows = items.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td><button onClick={() => removeItem(index)}>删除</button></td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
}

export default TableBody;
