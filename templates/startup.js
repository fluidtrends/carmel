function template (props) {
  return {
    cover: 'notebook',
    name: props.name || 'Startup Life',
    title: props.introTitle || 'My fitness site',
    fixture: 'simple',
    assets: [
      'notebook.r.png',
      'logo.png',
      'logo-white.png'
    ],
    chunks: {
      intro: {
        routes: {
          main: {
            title: props.introTitle || 'Welcome',
            cover: {
              title: props.introCoverTitle || 'Great city',
              subtitle: props.introCoverSubtitle || 'I love this city'
            }
          }
        }
      }
    }
  }
}

module.exports = template
