const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const genres = require("./src/genres/genres.json")
const movies = require("./src/movies/movies.json")


app.get("/genres", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001")
    return res.json(genres.genres)
})

app.get("/movies", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001")
    return res.json(movies.movies)
})

app.listen(port, () => {
    console.log("Servidor está rodando...")
})