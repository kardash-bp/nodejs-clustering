const http = require('http')
const cluster = require('cluster')
const app = require('./app')
const { loadPlanetsData } = require('./models/planets.module')
const PORT = process.env.PORT | 8000
const numCPU = require('os').cpus().length

const server = http.createServer(app)

async function startServer() {
  await loadPlanetsData()
  server.listen(PORT, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`CORS-enabled web server is listening on ${PORT}`)
  })
}

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)
  // fork workers
  for (let i = 0; i < numCPU; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    console.log("Let's fork another worker!")
    cluster.fork()
  })
} else {
  console.log(`Worker ${process.pid} started`)
  startServer()
}
