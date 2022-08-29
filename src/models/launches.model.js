//const axios = require('axios')

//const planets = require('./planets.module')
let launches = []
const launch = {
  flightNumber: 100,
  mission: 'New Earth',
  rocket: 'Star Track',
  launchDate: 'January 15, 2030',
  upcoming: true,
  success: true,
  customers: ['Zero to Mastery', 'NASA'],
}
launches.push(launch)
function getLatestFlightNumber() {
  return latestLaunch.flightNumber
}

function getAllLaunches() {
  return launches
}

async function scheduleNewLaunch(launch) {
  const newFlightNumber = launches.length + 1

  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['Zero to Mastery', 'NASA'],
    flightNumber: newFlightNumber,
  })

  launches.push(newLaunch)
  return newLaunch
}

function abortLaunchById(launchId) {
  const newLaunchesArr = launches.map((launch) => {
    if (+launch.flightNumber === +launchId) {
      return { ...launch, success: false, upcoming: false }
    }
    return launch
  })
  launches = [...newLaunchesArr]
  return
}

module.exports = {
  getAllLaunches,
  scheduleNewLaunch,
  abortLaunchById,
}
