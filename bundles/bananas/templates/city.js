function template (props) {
  return {
    fixture: 'simple',
    cover: 'hong-kong',
    name: props.name || 'City Life',
    title: props.title || 'This city is amazing',
    subtitle: props.subtitle || 'Come see how cool this city is',
    actionTitle: props.actionTitle || 'Visit The City',
    copyright: props.copyright || '2018',
    watermark: props.watermark || 'Made by Carmel'
  }
}

module.exports = template
