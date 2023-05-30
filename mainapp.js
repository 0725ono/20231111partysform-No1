const express = require("express");
const app = express();
const formRoute = require("./routes/maintasks");
const connectDB = require("./db/mainconnect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

const PORT = 3002;

// ルーティング設計
app.use("/api/v1/tasks", formRoute);

//DBと接続
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, console.log("メインの開発開始"));
    } catch (err) {
        console.log(err);
    }
}

start();
