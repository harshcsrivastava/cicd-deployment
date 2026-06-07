import express from "express"

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello, World! Github Actions with traditional way",
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})