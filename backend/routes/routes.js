const db = require("../db/connectors");

module.exports = function(app) {
    //API route to get all records
    app.get("/balance_sheet", async (req, res) => {
        try {
            let records = await db.getRecords();
            res.send(records);
        } 
        catch (error) {
            res.status(500).end();
        }
    });
    
    //API route to insert a record
    app.put("/balance_sheet", async (req, res) => {
        try {
            await db.insertRecord(req.body.name, req.body.type, req.body.balance);

            let records = await db.getRecords();
            res.send(records);
        } 
        catch (error) {
            if(error.message == "Invalid Type"){
                res.status(400).send("Invalid Type");
            }
            res.status(500).end();
        }
        
    });

    //API route to delete a record
    app.delete("/balance_sheet", async (req, res) => {
        try {
            await db.deleteRecord(req.body.id);

            let records = await db.getRecords();
            res.send(records);
        } catch (error) {
            res.status(500).end();
        }
    });

    //Send all other get routes to the frontend 
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
    });
};