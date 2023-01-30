const express = require("express")
const cors = require("cors")
const fs = require("fs");
// const uuid = require("uuid")
const PORT = 6060;


const app = express()
app.use(cors())
app.use(express.json())

app.post("/user", (req, res) => {
    console.log(req.body);
    const body = req.body;
    fs.readFile("./data/user.json", "utf-8", (readError, data) => {

        console.log(data);

        let savedData = data ? JSON.parse(data) : []
        console.log(savedData);
        if (readError) {
            res.JSON({
                status: "read file error"
            })
        }

        const newUser = {
            id: Date.now().toString(),
            username: body.username,
            age: body.age,
        }

        savedData.push(newUser)

        fs.writeFile(
            "./data/user.json",
            JSON.stringify(savedData),
            (writeError) => {
                if (writeError) {
                    res.json({ status: "error" })
                } else {
                    res.json({
                        status: "success",
                        data: savedData,
                    });
                }
            }
        )
    })
})

app.delete("/user", (req, res) => {
    const body = req.body
    fs.readFile("./data/user.json", "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if (readError) {
            res.json({ status: "read file error" })
        }
        const deletedData = savedData.filter((d) => d.id !== body.id)
        fs.writeFile("./data/user.json", JSON.stringify(deletedData),
            (writeError) => {
                if (writeError) {
                    res.json({ status: "error" })
                } else {
                    res.json({
                        status: "success",
                        data: deletedData,
                    })
                }
            })
    })
})

app.put("/user", (req, res) => {
    const body = req.body
    fs.readFile("./data/user.json", "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if (readError) {
            res.json({ status: "read file error" })
        }

        savedData.map((e) => {
            if (e.id == body.id) {
                e.username = body.username
                e.age = body.age
            }
        }
        )

        fs.writeFile("./data/user.json", JSON.stringify(savedData),
            (writeError) => {
                if (writeError) {
                    res.json({ status: "error" })
                } else {
                    res.json({
                        status: "success",
                        data: savedData,
                    })
                }
            })
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})