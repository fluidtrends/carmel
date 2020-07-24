import { IRepo, ICode, AccessTokenType, IDir } from '..'
// import NodeGit from 'nodegit'
import listDir from 'recursive-readdir'
import fs from 'fs'
import path from 'path'
import shortid from 'shortid'
import axios from 'axios'

/**
 *
 */
export class Repo implements IRepo {
  /** @internal */
  protected _code: ICode

  /** @internal */
  // protected _local?: NodeGit.Repository

  /** @internal */
  protected _remote?: any

  /** @internal */
  protected _owner?: string

  /** @internal */
  protected _name?: string

  /** @internal */
  protected _dir?: IDir

  /**
   *
   * @param code
   */
  constructor(code: ICode) {
    this._code = code
  }

  /**
   *
   */
  get code() {
    return this._code
  }

  // /**
  //  *
  //  */
  // get local() {
  //   return this._local
  // }

  /**
   *
   */
  get remote() {
    return this._remote
  }

  /**
   *
   */
  get owner() {
    return this._owner
  }

  /**
   *
   */
  get dir() {
    return this._dir
  }

  /**
   *
   */
  get name() {
    return this._name
  }

  // /**
  //  *
  //  */
  // get isOpen() {
  //   return this._local !== undefined
  // }

  /**
   *
   */
  get hasRemote() {
    return this._remote !== undefined
  }

  /**
   *
   */
  get isRemoteForeign() {
    return this.owner !== this.code.user?.login
  }

  /**
   *
   */
  async open() {
    // try {
    //   this._local = this.dir?.exists
    //     ? await NodeGit.Repository.open(this.dir!.path!)
    //     : undefined
    // } catch {}
  }

  /**
   *
   */
  async loadRemote() {
    // try {
    //   this._remote =
    //     this.code.service &&
    //     (await this.code.service.repos.get({
    //       owner: this.owner!,
    //       repo: this.name!,
    //     }))
    // } catch {}
  }

  /**
   *
   */
  async commit(paths: string[], comment: string) {
    // if (!this.isOpen) return

    // const signature = NodeGit.Signature.now(
    //   this.code.user?.name!,
    //   this.code.user?.email!
    // )

    // await this.local?.createCommitOnHead(paths, signature, signature, comment)
  }

  /** @internal */
  async shorten(url: string) {

  }

  /**
   *
   */
  async push() {
    if (!this.dir?.exists) return

    const { createFactory, createController, createServer } = require('ipfsd-ctl')
    process.env.IPFS_PATH = this.code.product.session!.dir.dir('ipfs')?.make()?.path    
    const deploymentId = shortid.generate()

    const deploymentRoot = `/deployments/${deploymentId}`                      

    const ignores = ['.DS_Store']
    let files: any[] = await listDir(this.dir!.path!)
    files = files.filter(file => !ignores.includes(path.basename(file))).map(file => {
      const info = fs.statSync(file)
      
      return {
          path: `${deploymentRoot}/${path.relative(this.dir!.path!, file)}`,
          content: fs.readFileSync(file),
          mtime: info.mtime
      }
    })

    if (!files || files.length === 0) return 

    console.log('starting ipfs node ...')

    // const node = await createController({
    //   type: 'js',
    //   ipfsModule: require('ipfs'),
    //   ipfsHttpModule: require('ipfs-http-client'),
    //   ipfsBin: path.join(__dirname, '../../node_modules/ipfs/src/cli/bin.js'),
    //   init: true, 
    //   start: true,
    //   ipfsOptions: { start: true, init: true, repo: process.env.IPFS_PATH }
    // })

    // const localGatewayUrl = `http://${node.api.gatewayHost}:${node.api.gatewayPort}`
    const publicGatewayUrl = `https://cloudflare-ipfs.com`

    console.log('done. pushing files ...')

    // await Promise.all(files.map(async file => await node.api.files.write(file.path, file.content, {
    //   parents: true, create: true, mtime: file.mtime  
    // })))


    const hash = 'Qmed19uXaxrhNFwEhmPm8zyz9vnF7TaqstJ4BiXvZ6ZuUb'

    console.log('done. publishing web ...')

    const ipfsUrl = `${publicGatewayUrl}/ipfs/${hash}`
    console.log(ipfsUrl)

    const shorten = await axios.post(`https://rel.ink/api/links/`,  {
      url: ipfsUrl
    }, { 
      headers: { 'Content-Type': 'application/json' }
    })

    if (!shorten || !shorten.data || !shorten.data.hashid) {
      return 
    }

    const shortUrl = `https://rel.ink/${shorten.data.hashid}`
    console.log(shortUrl)

    // const deployed = []
    // for await (const result of node.api.files.ls(deploymentRoot)) deployed.push(result)
    // const deployedWeb = deployed.find(d => d.name === 'web')
    // const deployedWebNamed = await node.api.name.publish(deployedWeb.cid)
    
    // const deployedWebNamed = await node.api.name.publish(`/ipfs/${hash}`)

    // console.log(deployedWebNamed)
    // const deployedWebUrls = {
    //   // localRaw: `${localGatewayUrl}/ipfs/${deployedWeb.cid}`,
    //   localNamed: `${localGatewayUrl}/ipns/${deployedWebNamed.name}`,
    //   // publicRaw: `${publicGatewayUrl}/ipfs/${deployedWeb.cid}`,
    //   publicNamed: `${publicGatewayUrl}/ipns/${deployedWebNamed.name}`
    // }

    console.log('done.')
    // console.log(deployedWebUrls)

    // await node.stop()
    console.log('node stopped')

    // if (!this.isOpen) return

    // let remote = await this.local?.getRemote('origin')

    // if (!remote) {
    //   remote = await NodeGit.Remote.create(
    //     this.local!,
    //     'origin',
    //     `git@github.com:${this.owner}/${this.name}.git`
    //   )
    // }

    // await remote?.push(['refs/heads/master:refs/heads/master'], {
    //   callbacks: {
    //     credentials: this.code.credentials,
    //   },
    // })
  }

  /**
   *
   */
  async setupHosting() {
    // const cwd = process.cwd()
    // process.chdir(this.dir!.path!)

    const webDir = this.code?.dir?.dir('.web')
    
    const deployWebDir = this.dir?.dir('web')
    deployWebDir?.exists && deployWebDir.remove()

    webDir?.exists && webDir.copy(deployWebDir!)

    // const vercel = this.code.product.session?.authenticator.providers.get(
    //   AccessTokenType.VERCEL
    // )

    // const name = `carmel-${this.code.product.id}`
    // const deployment: any = await vercel?.push(name, this)

    // process.chdir(cwd)
    // return deployment
  }

  /**
   *
   */
  async initialize() {
    // Always start with a fresh location
    this._dir = this.code?.dir?.dir('deploy')?.make()

    // this._owner =
    //   this.code?.product?.data?.deployRepo?.owner || this.code.user?.login
    // this._name = this.code?.product?.data?.deployRepo?.name || this.owner

    // await this.open()
    // await this.loadRemote()

    // if (!this.hasRemote && !this.isRemoteForeign) {
    //   // Create the remote repo, if possible
    //   await this.code.service.repos.createForAuthenticatedUser({
    //     name: this.name,
    //   })
    // }

    // if (this.isOpen) {
    //   // Let's get outta here
    //   return
    // }

    // try {
    //   // Initialize it, if necessary
    //   this._local = !this.hasRemote
    //     ? await NodeGit.Repository.init(this.dir!.path!, 0)
    //     : // Clone it
    //       await NodeGit.Clone.clone(
    //         `git@github.com:${this.owner}/${this.name}.git`,
    //         this.dir!.path!,
    //         {
    //           fetchOpts: {
    //             callbacks: {
    //               certificateCheck: () => 0,
    //               credentials: this.code.credentials,
    //             },
    //           },
    //         }
    //       )
    //   await this.open()
    // } catch {}
  }
}
