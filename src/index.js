const express = require('express');
const connect = require('./config/database');

const app = express();
app.use(express.urlencoded());


app.listen(3000, async () => {
    console.log("Server Started on PORT: 3000");
    await connect();
    console.log("MongoDB Connected");

}); 