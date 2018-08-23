it('change the logo to a new one', () => {
  cy.readFile('chunky.json').then(json => {
    const { theme } = json
    const { logoImage, logoLightImage } = theme
    expect(logoLightImage).to.not.equal('logo.png')
    expect(logoImage).to.not.equal('logo-white.png')
  })
})
