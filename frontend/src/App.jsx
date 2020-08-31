import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Total from './components/Total';

function App() {
  const [data, setData] = useState({netWorth: 0, assetTotal: 0, liabilityTotal: 0, records: []});

  useEffect(()=>{
    fetch("balance_sheet", {
      method: "GET"
    }).then((response)=>{
      response.json().then((result)=>{
        setData({netWorth: result.netWorth, assetTotal: result.assetTotal, liabilityTotal: result.liabilityTotal, records: result.records})
      })
    })
  },[])

  let onAdd = (name, balance, type) => {
    fetch("balance_sheet", {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' 
       },
      body:JSON.stringify({name: name, balance: balance, type: type})
    }).then((response)=>{
      response.json().then((result)=>{
        setData({netWorth: result.netWorth, assetTotal: result.assetTotal, liabilityTotal: result.liabilityTotal, records: result.records})
      })
    });
  };

  let onDelete = (id) => {
    fetch("balance_sheet", {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' 
       },
      body:JSON.stringify({id: id})
    }).then((response)=>{
      response.json().then((result)=>{
        setData({netWorth: result.netWorth, assetTotal: result.assetTotal, liabilityTotal: result.liabilityTotal, records: result.records})
      })
    });
  };

  return (
    <div>
      <Form onAdd={onAdd}/>
      <Total data={data}></Total>
      <Table data={data.records} onDelete={onDelete}/>
    </div>
  );
}

export default App;