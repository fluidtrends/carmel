import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import path from 'path'
import fs from 'fs-extra'
import Mocha from 'mocha'

const suiteInstance = Mocha.Suite
const Test = Mocha.Test

chai.use(chaiAsPromised)

const ctx = (product: any, original: any) => ({
    expect: chai.expect,
    original,
    product: {
        ...product,
        strings: () => JSON.parse(fs.readFileSync(path.resolve(product.dir, 'assets', 'en', 'text', 'strings.json'), 'utf-8'))
    }
})

export const main = async (props: any) => {
    const { product, challenge, progress } = props
    const { dir, task_index, bundle, name } = progress
    const validate = require(`carmel/bundles/${bundle.id}/${bundle.version}/${bundle.id}/challenges/${name}/tasks/${task_index}/validate.ts`).default
    
    const mocha = new Mocha({
        reporter: 'list'
    })

    const suite = (suiteName: string) => suiteInstance.create(mocha.suite, suiteName)

    const runTest = () => {
        return new Promise((resolve, reject) => {
            mocha.run((result: any) => {
                if (result) reject(new Error('Task failed'))
                resolve()
            })
        })
    }

    const original = {
        heading: "Go On. Change The World."
    }

    const testSuite = suite('carmel')
    testSuite.addTest(new Test(`task ${task_index}`, (done: any) => validate(ctx(product, original), done)))

    await runTest()
}