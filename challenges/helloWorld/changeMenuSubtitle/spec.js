it('change the title to a new one', () => {
  cy.readFile('chunks/intro/chunk.json').then(json => {
    const { routes } = json
    const { main } = routes
    const { title } = main
    expect(title).to.not.equal('Welcome')
  })
})
