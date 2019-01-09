let additionalConfig = {}
const challengesData = fetch(
  'https://raw.githubusercontent.com/fluidtrends/carmel/master/challenges/index.json'
)
  .then(response => response.json())
  .then(challenges => challenges)

const initialObj = {
  name: 'challenges',
  routes: {}
}

for (let i = 0; i < challengesData.length; i++) {
  initialObj.routes['initialChallenge'].title = challengesData[i]
  initialObj.routes['initialChallenge'].icon = 'favorite'
  initialObj.routes['initialChallenge'].path = `/challenge/${challengesData[i]}`
  initialObj.routes['initialChallenge'].components = {}
}

additionalConfig = { ...initialObj }

export default additionalConfig
