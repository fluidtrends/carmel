it('change the title to a new one', () => {
  cy.readFile('chunks/intro/chunk.json').then(json => {
    const { routes } = json
    const { main } = routes
    const { cover } = main
    const { subtitle } = cover
    expect(subtitle).to.not.equal('Checkout all the cool bikes')
  })
})
