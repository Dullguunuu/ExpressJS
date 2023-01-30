const express = require("express")
const cors = require("cors")
const json = require("body-parser")
const { response } = require("express")

const port = 8000
const app = express()

let products =
    [
        { id: 1, productName: "Shoes" },
        { id: 2, productName: "Bags" },
        { id: 3, productName: "Clothes" },
    ]

app.use(cors());
app.use(json());

app.get("/api", ( request, response ) => {
    response.json({ message: "Welcome to API" })
});

app.get("/products", ())

