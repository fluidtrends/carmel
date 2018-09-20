module.exports = ({ chai, utils, done }) => {

	// hardcode this for now

  const originalTextContent = `# Welcome to my site

	## This was built with **Carmel**, the fastest, easiest and most fun way to climb the Digital Mountain. Ready to keep climbing? Let's go. And remember, always be climbing.
`

  const introContent = utils.readFile('assets/text/intro.md')

  chai.expect(introContent).to.not.equal(originalTextContent, `Make sure your content is different`)

  done()
}
