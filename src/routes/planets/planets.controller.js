const { planets } = require('../../models/planets.module')

function getAllPlanets(req, res) {
  return res.status(200).json(planets)
}

function getPlanet(req, res) {
  const planetId = req.params.planetId
  const planet = planets.find((p) => p.kepid === planetId)
  console.log(planet)
  return res.status(200).json(planet)
}

module.exports = {
  getAllPlanets,
  getPlanet,
}
