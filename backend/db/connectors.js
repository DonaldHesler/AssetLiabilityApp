var mysql = require("promise-mysql");

//Get a new database connection
async function setupDBConnection(){
    let connection = await mysql.createConnection({
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    if (connection.state === 'disconected'){
        throw new Error("Database Connection Failed")
    }

    return connection;
}

//Handles getting records from the database
async function getRecords(){
    
    let connection = await setupDBConnection();

    let dbQuery = "SELECT * FROM balance_sheet";
    let records = await connection.query(dbQuery);
    connection.end();

    //Calulate summed fields and return all records
    return {
        netWorth: records.reduce((total, record) => total + record.balance, 0),
        assetTotal: records.filter((record) => record.type === "Asset").reduce((total, record) => total + record.balance , 0),
        liabilityTotal: records.filter((record) => record.type === "Liability").reduce((total, record) => total + record.balance, 0),
        records: records
    };
}

//Handles inserting a record into the database
async function insertRecord(name, type, balance){
    //Check Types and try to cast to proper types
    if(typeof name !== "string"){
        name = name.toString();
    }
    if(type !== "Asset" && type !== "Liability"){
        throw new Error("Invalid Type");
    }
    if(typeof balance !== "number"){
        balance = parseFloat(balance);
    }
    
    let connection = await setupDBConnection();

    let dbQuery = "Insert into balance_sheet (name, type, balance) values (?, ?, ?)";
    let result = await connection.query(dbQuery,[name, type, balance]);
    connection.end();
    
    return result;
}

//Handles deleting a record from the database
async function deleteRecord(id){
    let connection = await setupDBConnection();

    let dbQuery = "Delete from balance_sheet where id = ?";
    let result = await connection.query(dbQuery,[id]);
    connection.end();
    
    return result;
}

module.exports = {
    getRecords: getRecords,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord
};