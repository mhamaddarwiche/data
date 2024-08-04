const express = require('express')
const cors = require('cors');
const xlsx = require("xlsx");
const app = express();
const PORT = process.env.PORT || 3030;

const wb = xlsx.readFile('inventory.xlsx');
const ws = wb.Sheets["data"];


app.use(cors())

//app.get('/', function (req, res) {
    //res.send('Hello World')
//})

app.get('/data', function (req, res) {
    let data = xlsx.utils.sheet_to_json(ws);
    res.send(data);
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})