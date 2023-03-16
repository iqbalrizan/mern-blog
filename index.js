import express from "express"

const app = express()
const port = 4000

app.get("/about", (req, res) =>{
    res.json({
        "pesan" : "haloooo",
        "anjing" : "njing"
    })
})

app.listen(port, () => {
    console.log(`express dijalankan di port ${port}`)
})