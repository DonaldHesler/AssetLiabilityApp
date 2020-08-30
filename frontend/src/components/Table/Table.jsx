import React from 'react';

const style = {
    table: {
        padding: 10
    },
    th: {
        textAlign: "left"
    },
    td: {
        padding: "1px 5px"
    },
    tdBalance: {
        padding: "1px 5px",
        textAlign: "right"
    }
}

export default function Table(props) {
    let rows = props.data.map((row)=>{
        return (
            <tr>
                <td style={style.td} onClick={()=>{props.onDelete(row.id)}}>
                    <i class="fas fa-trash" ></i>
                </td>
                <td style={style.td}>{row.name}</td>
                <td style={style.td}>{row.type}</td>
                <td style={style.tdBalance}>{row.balance}</td>
            </tr>
        )
    })
  return (
    <div style={style.table}>
        <table rules="rows">
            <thead>
                <th></th>
                <th style={style.th}>Name</th>
                <th style={style.th}>Type</th>
                <th style={style.th}>Balance</th>
            </thead>
            <tbody>
                {rows} 
            </tbody>
        </table>
    </div>
  );
}
