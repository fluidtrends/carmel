import { IRepo, ICode, AccessTokenType, IDir } from '..'
// import NodeGit from 'nodegit'
import listDir from 'recursive-readdir'
import fs from 'fs'
import path from 'path'
import shortid from 'shortid'
import axios from 'axios'
import xml from 'xml2js'

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

  async runNamecheapCommand (data: any) {
    const domain = data.domain

    const { vault } = this.code.product.session?.index.sections.secrets

    if (vault.isLocked) {
      return
    }

    const namecheap = vault.read('namecheap')
    const nsIp = namecheap.clientIP//"45.82.223.81"
    const nsUser = namecheap.username//"fluidchunky"
    const nsKey = namecheap.apiKey//"d9f102afa99c4a09a1dcc1da9fe31b46"

    console.log('NS namecheap:', namecheap)

    const domainParts = domain.split('.')
    const nsTLD = domainParts.pop()
    const nsSLD = domainParts.join('.')
    const nsCmd = data.cmd
    const nsCallRoot = `https://api.namecheap.com/xml.response?ApiUser=${nsUser}&ApiKey=${nsKey}&UserName=${nsUser}&ClientIP=${nsIp}`
    const nsCall = `${nsCallRoot}&SLD=${nsSLD}&TLD=${nsTLD}&Command=namecheap.${nsCmd}${data.args ? '&' + data.args : ''}`   

    console.log('NS Call:', nsCall)

    const nsResponse = await axios.get(nsCall)
    const response: any = await xml.parseStringPromise(nsResponse.data)
    
    const { ApiResponse } = response
    const { CommandResponse } = ApiResponse

    console.log(ApiResponse)

    if (!ApiResponse || !CommandResponse) {
      return
    }

    if (ApiResponse.$.Status === 'ERROR') { 
      return { error: ApiResponse.Errors[0].Error[0] }
    }
      
    return CommandResponse[0]
  }

  async getNamespaceHosts (data: any) {
    const response: any = await this.runNamecheapCommand({ ... data, cmd: "domains.dns.getHosts" })

    if (!response || response.error || !response.DomainDNSGetHostsResult) {
      return 
    }
    
    const { DomainDNSGetHostsResult } = response

    const { host } = DomainDNSGetHostsResult[0]

    if (!host) {
      return 
    }

    return host.map((entry: any) => {
      return entry.$
    })
  }

  async updateNamespaceHosts (data: any) {
    const hosts = await this.getNamespaceHosts(data)

    if (!hosts) {
      return 
    }

    var args = ``
    hosts.map((h: any, i: number) => {
      var name = h.Name 
      var type = h.Type
      var ttl = h.TTL
      var value = h.Address

      if (data.cid && name.substring(0, 8) === '_dnslink') {
        value = `dnslink=/ipfs/${data.cid}`
      }

      args = `${args}${[`HostName${i+1}`]}=${name}&${[`Address${i+1}`]}=${value}&${[`RecordType${i+1}`]}=${type}&${[`TTL${i+1}`]}=${ttl}${i < hosts.length - 1 ? '&' : ''}`
    })

    const response: any = await this.runNamecheapCommand({ 
      ...data, 
      args,
      cmd: "domains.dns.setHosts" 
    })

    return response
  }

  /**
   *
   */
  async push() {
    if (!this.dir?.exists) return

    process.env.IPFS_PATH = this.code.product.session!.dir.dir('ipfs')?.make()?.path
    const ipfsConfig = JSON.parse(fs.readFileSync(path.resolve(process.env.IPFS_PATH!, 'config'), 'utf-8'))

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
    
    let deployment: any = {
      timestamp: Date.now(),
      id: deploymentId,
      files: files.length
    }

    if (!files || files.length === 0) return deployment 

    const ipfsClient = require('ipfs-http-client')
    const node = ipfsClient(ipfsConfig.Addresses.API)
    const localGatewayUrl = `http://${node.gatewayHost}:${node.gatewayPort}`
    const publicGatewayUrl = `https://ipfs.io`

    await Promise.all(files.map(file => node.files.write(file.path, file.content, {
      parents: true, create: true, mtime: file.mtime  
    })))

    const deployed = []
    for await (const result of node.files.ls(deploymentRoot)) deployed.push(result)
    const deployedWeb = deployed.find(d => d.name === 'web')

    const deployedWebNamed = await node.name.publish(deployedWeb.cid)
    deployment.urls = {
      publicRaw: `${publicGatewayUrl}/ipfs/${deployedWeb.cid}`,
      publicNamed: `${publicGatewayUrl}/ipns/${deployedWebNamed.name}`
    }

    const dns = await this.updateNamespaceHosts({ 
      domain: 'carmel.io',
      cid: deployedWeb.cid
    })

    console.log(dns)

    // response.elements.map((e: any) => {
    //   console.log("<<<<<<>llllll>>>>", e)
    //   if (e.name === 'ApiResponse') {
    //     console.log(">>EL?:", e.attributes.Status)
    //     console.log(">>ELel:", e.elements)        
    //   }
    // })

    // const shorten = await axios.post(`https://rel.ink/api/links/`,  {
    //   url: deployment.urls.publicRaw
    // }, { 
    //   headers: { 'Content-Type': 'application/json' }
    // })

    // if (!shorten || !shorten.data || !shorten.data.hashid) {
    //   return deployment
    // }
    // deployment.urls.short = `https://rel.ink/${shorten.data.hashid}`

    // console.log('done. waiting to go live ...')
    // console.log(deployment.urls)

    // const check = async () => {
    //   try {
    //     console.log('checking ...')
    //     return await axios.get(deployment.urls.publicRaw)
    //   } catch {}
    // }

    // await new Promise((done) => {
    //   (async () => {
    //     let checked: any
    //     while(!checked || checked.status !== 200) {
    //       checked = await check()
    //     }
    //     done()
    //   })()
    // })

    console.log('done.')

    return deployment

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
