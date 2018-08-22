function template (props) {
  return {
    cover: 'child',
    title: props.introTitle || 'My Personal Bike Shop',
    name: props.name || 'Kindergarden',
    fixture: 'simple',
    assets: [
      'child.r.png',
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
