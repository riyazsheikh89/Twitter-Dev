import express from 'express';
import connect from './config/database.js';


const app = express();
app.use(express.urlencoded());


app.listen(3000, async () => {
    console.log("Server Started on PORT: 3000");
    await connect();
    console.log("MongoDB Connected");

});