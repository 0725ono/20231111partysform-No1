// const express = require('express');
// const app = express();
// const PORT = 3001;
// app.use(express.json());

// app.listen(PORT, () => console.log("サーバーが起動しました。"));

// app.get("/", (req, res) => {
//     res.send("Udemy講座を受講中");
// });

// const customers = [
//     { title: "田中", id: 1 },
//     { title: "マルクス", id: 2 },
//     { title: "闘莉王", id: 3 },
//     { title: "斉藤", id: 4 },
//     { title: "加藤", id: 5 },
// ];

// app.get("/api/customers", (req, res) => {
//     res.send(customers);
// });

// app.post("/api/customers", (req, res) => {
//     const customer = {
//         title: req.body.title,
//         id: customers.length + 1,
//     };
//     customers.push(customer);
// });

// app.put("/api/customers/:id", (req, res) => {
//     const customer = customers.find((c) => c.id === parseInt(req.params.id));
//     customer.title = req.body.title;
//     res.send(customer);
// });

// // 削除
// app.delete("/api/customers/:id", (req, res) => {
//     const customer = customers.find((c) => c.id === parseInt(req.params.id));
//     const index = customers.indexOf(customer);
//     customers.splice(index, 1);
//     res.send(customer);
// })