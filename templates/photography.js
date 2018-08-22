function template (props) {
  return {
    cover: 'photographer',
    name: props.name || 'Photography',
    title: props.introTitle || 'My fitness site',
    fixture: 'simple',
    assets: [
      'photographer.r.png',
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
