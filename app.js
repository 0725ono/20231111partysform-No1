const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

const PORT = 3000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//DBと接続
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL); 
        app.listen(PORT, console.log("開発開始!!!"));

    } catch (err) {
        console.log(err);
    }    
}

start();

