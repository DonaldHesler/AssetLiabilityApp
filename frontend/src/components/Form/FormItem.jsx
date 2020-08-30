import React, { useRef, useState } from "react";

let style = {
  label: {
    display: "table-row",
    
  },
  span: {
    paddingRight: 5,
    paddingBottom: 6,
    display: "table-cell"
  },
};

export default function FormItem(props) {
  const ref = useRef(null);

  return (
    <label style={style.label}>
      <span style={style.span}>{`${props.label}`}</span>
      {props.children}
    </label>
  );
}
