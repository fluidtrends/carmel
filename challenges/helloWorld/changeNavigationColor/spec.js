it('change the logo to a new one', () => {
  cy.readFile('chunky.json').then(json => {
    const { theme } = json
    const { navigationColor } = theme
    expect(navigationColor).to.not.equal('#FFFFFF')
  })
})
