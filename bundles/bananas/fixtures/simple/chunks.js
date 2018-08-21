function chunks (template) {
  return {
    intro: {
      routes: {
        main: {
          title: 'Welcome',
          cover: {
            image: `${template.cover}.r.png`,
            title: template.title,
            subtitle: template.subtitle,
            primaryActionTitle: template.actionTitle
          }
        }
      }
    }
  }
}

module.exports = chunks
