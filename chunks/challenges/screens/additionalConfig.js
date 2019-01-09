let additionalConfig = {}
const initialObj = {
  routes: {}
}
const challenges = require('challenges/index.json')

for (let i = 0; i < challenges.length; i++) {
  let path = challenges[i]
    .replace(/\.?([A-Z]+)/g, function(x, y) {
      return '-' + y.toLowerCase()
    })
    .replace(/^_/, '')

  initialObj.routes[`initialChallenge${i + 1}`] = {}
  initialObj.routes[`initialChallenge${i + 1}`]['title'] = challenges[i]
  initialObj.routes[`initialChallenge${i + 1}`]['icon'] = 'favorite'
  initialObj.routes[`initialChallenge${i + 1}`]['path'] = `/challenge/${path}`
  initialObj.routes[`initialChallenge${i + 1}`].components = {}
}
additionalConfig = { ...initialObj }

export default additionalConfig
