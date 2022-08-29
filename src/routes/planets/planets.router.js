const { Router } = require('express')
const { getAllPlanets, getPlanet } = require('./planets.controller')

const planetsRouter = Router()

planetsRouter.get('/', getAllPlanets)
planetsRouter.get('/:planetId', getPlanet)

module.exports = planetsRouter
