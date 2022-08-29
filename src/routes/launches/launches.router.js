const { Router } = require('express')
const {
  httpGetAllLaunches,
  addNewLaunch,
  abortLaunch,
} = require('./launches.controller')

const launchesRouter = Router()

launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', addNewLaunch)
launchesRouter.delete('/:id', abortLaunch)

module.exports = launchesRouter
