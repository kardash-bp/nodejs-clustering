const {
  getAllLaunches,
  scheduleNewLaunch,
  abortLaunchById,
} = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches())
}
function addNewLaunch(req, res) {
  const newLaunch = scheduleNewLaunch(req.body)
  return res.status(201).json(newLaunch)
}
function abortLaunch(req, res) {
  console.log(+req.params.id)
  abortLaunchById(+req.params.id)
  return res.status(200).json('Deleted')
}
module.exports = {
  httpGetAllLaunches,
  addNewLaunch,
  abortLaunch,
}
