function template (props) {
  return {
    fixture: 'simple',
    cover: 'bike',
    name: props.name || 'My Bikes',
    title: props.title || 'My amazing bike shop',
    subtitle: props.subtitle || 'Checkout all the cool bikes',
    actionTitle: props.actionTitle || 'Get A Bike',
    copyright: props.copyright || '2018',
    watermark: props.watermark || 'Made by Carmel'
  }
}

module.exports = template
