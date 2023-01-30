const { request, response } = require("express");
const express = require("express")
const cors = require("cors")

const port = 8000;

const app = express()
app.use(cors())

app.get("/", (request, response) => {
    const { id } = request.query
    response.json({ status: true, result: [{ id: 1, name: "Hello" }] })
});

app.get("/api", (request, response) => {
    const { id } = request.query;
    console.log("api is running")
    response.json({ status: true })
});

app.get("/add", (request, response) => {
    const { a, b } = request.query;
    let result = Number(a) + Number(b)
    response.json({ value: result })
});

app.get("/sub", (request, response) => {
    const { a, b } = request.query;
    let result = Number(a) - Number(b)
    response.json({ value: result })
});

app.get("/mul", (request, response) => {
    const { a, b } = request.query;
    let result = Number(a) * Number(b)
    response.json({ value: result })
});
app.get("/division", (request, response) => {
    const { a, b } = request.query;
    let result = Number(a) / Number(b)
    response.json({ value: result })
});
app.get("/clear", (request, response) => {
    let result = 0
    response.json({ value: result })
});


app.listen(port, () => {
    console.log("Server is running at localhost: " + port)
    console.log("Nodemon test");
})