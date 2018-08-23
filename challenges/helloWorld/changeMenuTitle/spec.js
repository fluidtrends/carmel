const { root } = Cypress.env()
const file = `${root}/chunks/intro/chunk.json`

it('change the title to a new one', () => {
  cy.readFile(file).then(json => {
    const { routes } = json
    const { main } = routes
    const { title } = main
    expect(title).to.not.equal('Welcome')
  })
})
