function template (props) {
  return {
    cover: 'brothers',
    name: props.name || 'Family Album',
    title: props.introTitle || 'My family site',
    fixture: 'starter',
    assets: [
      'brothers.r.png',
      'logo.png',
      'logo-white.png'
    ],
    chunks: {
      intro: {
        routes: {
          main: {
            title: props.introTitle || 'My Personal Family Shop',
            cover: {
              title: props.introCoverTitle || 'How about these kids',
              subtitle: props.introCoverSubtitle || 'They are the best'
            }
          }
        }
      }
    }
  }
}

module.exports = template
