const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3001;
const db = new sqlite3.Database("flexifocus-db");

function initialiseDB() {
    db.run("CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, username TEXT, password TEXT");
    db.run("CREATE TABLE IF NOT EXISTS tasks (user_id INTEGER PRIMARY KEY, username TEXT, password TEXT");
}

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/save', (req, res) => {
    const tasks = req.body.tasks;
    var saveInsertString = "INSERT INTO tasks (user_id, task_id, maintask, subtask) VALUES\n";
    console.log(`tasks length: ${tasks.length}`);
    tasks.forEach((task, idx) => {
        if (idx < tasks.length-1) {
            saveInsertString += `(0, ${task.id}, "${task.maintask}", "${task.description}"),\n`;
        }
        else {
            saveInsertString += `(0, ${task.id}, "${task.maintask}", "${task.description}");`;
        }
    });
    console.log(saveInsertString);
    db.run(saveInsertString);
    res.send("ok");
})
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});