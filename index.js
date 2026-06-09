import express from "express"

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello, World! Github Actions with traditional way",
        status: "Dockerized and Deployed using Github Actions",
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})