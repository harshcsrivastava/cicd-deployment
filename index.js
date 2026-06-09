import express from "express"

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Still Alive, Still Breathing.",
        status: "Dockerized and Deployed using Github Actions + SSL Certified with Caddy",
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})