# Asset & Liability Tracker
This is a simple application to track assets and liabilities.
Demo: https://assetliabilityapp.herokuapp.com/

## Backend:
Tested with Node v14.9.0

### API:
#### GET balance_sheet 
Sample Response:
```
{
    "netWorth": 223,
    "assetTotal": 273,
    "liabilityTotal": -50,
    "records": [
        {
            "id": 1,
            "name": "test1",
            "balance": 150,
            "type": "Asset"
        },
        {
            "id": 2,
            "name": "test2",
            "balance": -50,
            "type": "Liability"
        },
        {
            "id": 5,
            "name": "test3",
            "balance": 123,
            "type": "Asset"
        }
    ]
}
```
#### PUT balance_sheet
Request:
```
{
    name: any string up to 64 characters,
    type: Asset or Liability
    balance: any number up to 2 decimal places
}
```
Response:
Same response as GET balance_sheet

#### DELETE balance_sheet
Request:
```
{
    id: integer id of record to delete
}
```
Response:
Same response as GET balance_sheet

## Frontend:
Frontend is build using react v16.13.

**Note: Developer dependencies are duplicated in the dependencies list to work with heroku build process**