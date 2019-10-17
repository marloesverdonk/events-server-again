const express = require('express')
const app = express()
const port = 4001
const db = require('./db')



app.listen(port, () => console.log(`listening on port ${port}`))