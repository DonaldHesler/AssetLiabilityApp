import React from 'react';

let style = {
    tableRow: {
      display: "table-row",
    },
    tableCellLabel: {
      display: "table-cell",
      paddingRight: 5
    },
    tableCellValue: {
        display: "table-cell",
        textAlign: "right"
      },
    table: {
      display: "table",
      padding: 10
    },
  };

export default function Total(props) {

  return (
    <div style={style.table}>
        <div style={style.tableRow}>
            <span style={style.tableCellLabel}>{"Assets Total"}</span>
            <span style={style.tableCellValue}>{props.data.assetTotal.toFixed(2)}</span>
        </div>
        <div style={style.tableRow}>
            <span style={style.tableCellLabel}>{"Liabilities Total"}</span>
            <span style={style.tableCellValue}>{props.data.liabilityTotal.toFixed(2)}</span>
        </div>
        <div style={style.tableRow}>
            <span style={style.tableCellLabel}>{"Net Worth"}</span>
            <span style={style.tableCellValue}>{props.data.netWorth.toFixed(2)}</span>
        </div>
    </div>
  );
}
