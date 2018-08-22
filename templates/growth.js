function template (props) {
  return {
    cover: 'road',
    name: props.name || 'Personal Growth',
    title: props.introTitle || 'My fitness site',
    fixture: 'simple',
    assets: [
      'road.r.png',
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
