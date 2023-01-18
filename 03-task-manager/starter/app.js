
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()  //in .env we keep secret data. For example, connect info to the db

app.use(express.static("./public")) //to include front-end (all files from public folder)
app.use(express.json());

app.get('/hello', (req, res) =>{
    res.send('Task Manager App')
})

app.use("/api/v1/tasks", tasks) //I am looking for the /api/v1/tasks in the tasks file

const port = 3000;

//we need DB start first and only after that server start work
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}` ) )

    } catch(error) {
        console.log(error)

    }

}

start()


