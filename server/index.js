const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3001;
const db = new sqlite3.Database("flexifocus-db");

function initialiseDB() {
    db.run("CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, username TEXT, password TEXT");
    db.run("CREATE TABLE IF NOT EXISTS tasks (user_id INTEGER PRIMARY KEY, username TEXT, password TEXT");
}

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/save', (req, res) => {
    const tasks = req.body;

})
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});