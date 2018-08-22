const changeMenuTitle = require('./changeMenuTitle')

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
    tasks: [{
      index: 0,
      id: 'changeMenuTitle',
      task: changeMenuTitle(Object.assign({}, props))
    }]
  }
}
