const express = require('express')
const path = require('path')
const cors = require('cors')
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.static('./public'))

app.use('/planets', planetsRouter)
app.use('/launches', launchesRouter)

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendfile(__dirname + '/../public/index.html')
})

// app.use((err, request, response, next) => {
//   // log the error, for now just console.log
//   console.log(err)
//   response.status(500).send('Something broke!')
// })

module.exports = app
