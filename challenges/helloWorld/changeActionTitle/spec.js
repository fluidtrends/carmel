it('change the title to a new one', () => {
  cy.readFile('chunks/intro/chunk.json').then(json => {
    const { routes } = json
    const { main } = routes
    const { cover } = main
    const { primaryActionTitle } = cover
    expect(primaryActionTitle).to.not.equal('Get A Bike')
  })
})
