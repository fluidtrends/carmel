import savor, {
    Context,
    Completion
} from 'savor'

import { 
    Product, 
    Strings    
} from '../../src'

import fs from 'fs-extra'

savor.

// add('should create a default product', (context: Context, done: Completion) => {
//     const product = new Product()

//     savor.promiseShouldSucceed(product.create(), done, () => {
//         context.expect(product.data).to.exist
//     })
// }).

// add('should be able to save to the context', (context: Context, done: Completion) => {
//     const product = new Product()

//     savor.promiseShouldSucceed(product.create().then(() => product.load()), done, () => {
//         product.saveContext({ hello: "test" })
//         context.expect(product.data.context.hello).to.equal('test')
//     })
// }).

add('should not load a missing file', (context: Context, done: Completion) => {
    const product = new Product()

    savor.promiseShouldFail(product.loadFile("test"), done, (error: Error) => {
        context.expect(error.message).to.equal(Strings.FileDoesNotExistString("test"))
    })
}).

add('should handle invalid files', (context: Context, done: Completion) => {
    const stub = context.stub(fs, 'readFileSync').callsFake(() => { throw new Error('oops') })
    const product = new Product()
    savor.addAsset('assets/file.txt', 'file.txt', context)

    savor.promiseShouldFail(product.loadFile("file.txt"), done, (error: Error) => {
        stub.restore()
        context.expect(error.message).to.equal(Strings.FileCouldNotBeLoadedString('file.txt', 'oops'))
    })
}).

add('should load a non-JSON file', (context: Context, done: Completion) => {
    const product = new Product()
    savor.addAsset('assets/file.txt', 'file.txt', context)

    savor.promiseShouldSucceed(product.loadFile("file.txt"), done, (data: any) => {
        context.expect(data).to.equal('hello')
    })
}).

add('should load a JSON file', (context: Context, done: Completion) => {
    savor.addAsset('assets/file.json', 'file.json', context)
    const product = new Product()

    savor.promiseShouldSucceed(product.loadFile("file.json"), done, (data: any) => {
        context.expect(data.hello).to.equal('test1234')
    })
}).

add('should not lookup directories in a missing directory', (context: Context, done: Completion) => {
    const product = new Product()

    context.expect(product.findDirs("test").length).to.equal(0)
    done()
}).

add('should find some directories',  (context: Context, done: Completion) => {
    const product = new Product()
    savor.addAsset('assets/dirs', 'dirs', context)

    context.expect(product.findDirs("dirs").length).to.equal(1)
    done()
}).

run('[Carmel SDK] Product')
