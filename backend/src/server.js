import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'

const app = express()

const port = 8080

app.use(cors)
app.use(json)
app.use(urlencoded({ extended: true }))


app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}/api`)
}
