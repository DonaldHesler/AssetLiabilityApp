import React, { useRef, useState } from "react";
import FormItem from "./FormItem";

let style = {
  button: {
    width: "100%",
  },
  tableRow: {
    display: "table-row",
  },
  tableCell: {
    display: "table-cell",
  },
  table: {
    display: "table",
    padding: 10
  },
};

export default function Form(props) {
  const nameRef = useRef(null);
  const valueRef = useRef(null);
  const [type, setType] = useState("Asset");

  let handleClick = () => {
    props.onAdd(
      nameRef.current.value,
      parseFloat(valueRef.current.value),
      type
    );
    nameRef.current.value = "";
    valueRef.current.value = "";
    setType("Asset");
  };

  return (
    <div style={style.table}>
      <FormItem label="Name">
        <input type="text" ref={nameRef}></input>
      </FormItem>
      <FormItem label="Balance">
        <input type="number" ref={valueRef}></input>
      </FormItem>
      <FormItem label="Type">
        <label>
          <input
            type="radio"
            value="Asset"
            checked={type === "Asset"}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          Asset
        </label>
        <label>
          <input
            type="radio"
            value="Liability"
            checked={type === "Liability"}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          Liability
        </label>
      </FormItem>
      <div style={style.tableRow}>
        <div style={style.tableCell}></div>
        <div style={style.tableCell}>
          <button style={style.button} onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
