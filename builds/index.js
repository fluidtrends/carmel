const fs = require('fs-extra')
const path = require('path')
const build = require('./build.json')
const shortid = require('shortid')
const semver = require('semver')

const root = path.resolve(process.cwd(), 'builds')

const newBuild = Object.assign({}, build)
newBuild.timestamp = Date.now()
newBuild.id = shortid.generate()
newBuild.version = semver.inc(newBuild.version, "patch")

fs.writeFileSync(path.resolve(root, 'build.json'), JSON.stringify(newBuild, null, 2), 'utf8')
console.log(newBuild.version)
