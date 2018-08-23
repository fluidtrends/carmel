const changeMenuTitle = require('./changeMenuTitle')
const changeMenuSubtitle = require('./changeMenuSubtitle')
const changeActionTitle = require('./changeActionTitle')
const changeLogo = require('./changeLogo')
const changeNavigationColor = require('./changeNavigationColor')

module.exports = (props) => {
  return {
    title: 'Hello World',
    summary: 'Start creating your personal brand in minutes',
    authors: [{
      name: 'Robert Pop Daniel',
      email: 'poprobertdaniel22@gmail.com'
    }, {
      name: 'Chris',
      email: ''
    }],
    level: 0,
    skills: ['json', 'web', 'copywriting', 'branding'],
    tasks: [
      changeMenuTitle(props),
      changeMenuSubtitle(props),
      changeActionTitle(props),
      changeLogo(props),
      changeNavigationColor(props)
    ]
  }
}
