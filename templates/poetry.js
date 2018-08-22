function template (props) {
  return {
    cover: 'fall',
    name: props.name || 'Poetry',
    title: props.introTitle || 'My fitness site',
    fixture: 'simple',
    assets: [
      'fall.r.png',
      'logo.png',
      'logo-white.png'
    ],
    chunks: {
      intro: {
        routes: {
          main: {
            title: props.introTitle || 'My Personal Bike Shop',
            cover: {
              title: props.introCoverTitle || 'How about these bikes bro',
              subtitle: props.introCoverSubtitle || 'You know what I am sayin?'
            }
          }
        }
      }
    }
  }
}

module.exports = template
