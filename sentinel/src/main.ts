import debug from 'debug'
import path from 'path'
import fs from 'fs-extra'
import { Session } from '@carmel/core'
import { create } from 'ipfs-core'
import { createLibp2p } from 'libp2p'
import { libp2pConfig } from './config'

const LOG = debug("carmel:sentinel")

const libp2pBundle = (relays: any) => (opts: any) => {
    const peerId = opts.peerId
  
    return createLibp2p({
      peerId,
      addresses: {
        listen: [...relays]
      },
      ...libp2pConfig()
    })
  }

export const start = async (isOperator = true) => {
    LOG('Starting...')
    const ROOTDIR = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh-${isOperator ? 'full': 'light'}/`

    fs.existsSync(ROOTDIR) || fs.mkdirpSync(ROOTDIR)
    
    const repoDir = path.join(ROOTDIR, `repo-${isOperator ? 'full': 'light'}`)
    const revision = process.env.REV

    const cwd = process.cwd()
    const baseConfig = JSON.parse(fs.readFileSync(path.join(cwd, `config.${isOperator ? 'full': 'light'}.json`), 'utf-8'))

    const ses = new Session({ ...baseConfig, isOperator, revision, root: repoDir })    

    const relays = await ses.chain._fetchRelays()

    const libp2p = libp2pBundle(relays)

    const node: any = await create({
        repo: repoDir,
        libp2p
    })

    await ses.start(node)

    LOG('Started')
}