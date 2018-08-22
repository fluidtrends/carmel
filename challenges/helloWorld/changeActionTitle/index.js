const spec = require('./spec')

module.exports = (props) => {
  return {
    id: 'changeActionTitle',
    index: 3,
    title: 'Define your button',
    instructions: `Let's edit the main button. In order to do that, you need to open the chunks folder and take a look at the intro folder.`,
    help: `Tap the 'open file' button and open the chunks/intro/chunk.json file`,
    files: ['chunks/intro/chunk.json']
  }
}
