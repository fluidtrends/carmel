function template (props) {
  return {
    cover: 'maldives',
    name: props.name || 'Vacation',
    title: props.introTitle || 'My fitness site',
    fixture: 'simple',
    assets: [
      'maldives.r.png',
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
