module.exports = (props) => {
  return {
    id: 'changeNavigationColor',
    index: 5,
    title: 'Change the navigation color',
    instructions: `Let's change the logo with your own. In order to do that, you need to open the root folder  and take a look at the chunky.json file.`,
    help: `Tap the 'open file' button and open the chunky.json file and look for navigation color`,
    files: ['chunky.json']
  }
}
