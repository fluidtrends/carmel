function footer (template) {
  return {
    sections: [{
      title: 'Get in touch',
      id: 'social',
      elements: [
        {
          id: 'web',
          title: 'Web',
          link: 'http://carmel.io'
        },
        {
          id: 'twitter',
          title: 'Twitter',
          link: 'http://twitter.com/carmelplatform'
        },
        {
          id: 'telegram',
          title: 'Telegram',
          link: 'http://t.me/carmelplatform'
        },
        {
          id: 'medium',
          title: 'Medium',
          link: 'http://medium.com/carmelplatform'
        }
      ]
    }]
  }
}

module.exports = footer
