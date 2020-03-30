const path = require('path')
const Command = require('../../Command')
const parseDomain = require("parse-domain")

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID } 
  get title() { return _.TITLE }

  ensureDomainIsHosted(session, domain) {
    session.logger.info('Ensuring the domain is hosted ...')

    return new Promise((resolve, reject) => {
      domain.isHosted().then(() => {
        resolve(domain)
      })
      .catch(() => {
        domain.host().then(() => {
          resolve()
        })
        .catch((e) => reject(e))
      })
    })
  }

  ensureBucketExists(session, bucket) {
    session.logger.info('Ensuring the bucket exists ...')

    return new Promise((resolve, reject) => {
      bucket.exists().then(() => {
        resolve(bucket)
      })
      .catch(() => {
        bucket.create().then(() => {
          resolve(bucket)
        })
        .catch((e) => reject(e))
      })
    })
  }

  ensureBucketIsLinked(session, domain) {
    session.logger.info('Ensuring bucket and domain are linked ...')

    return new Promise((resolve, reject) => {
      domain.isBucketLinked().then(() => {
        resolve(domain)
      })
      .catch(() => {
        domain.linkBucket().then(() => {
          resolve(domain)
        })
        .catch((e) => reject(e))
      })
    })
  }

  findCredentials(session) {
    const profile = this.args.profile || 'default'

    const v = session.index.sections.safe.vault

    if (v.isLocked) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')))
    }

    session.logger.info(`Looking up AWS credentials [${profile}] ...`)

    const credentials = v.read(`aws.${profile}`)

    if (!credentials || !credentials.key || !credentials.secret) {
      return Promise.reject(new Error('No credentials found'))
    }

    process.env.AWS_SDK_LOAD_CONFIG = null
    process.env.AWS_ACCESS_KEY_ID = credentials.key
    process.env.AWS_SECRET_ACCESS_KEY = credentials.secret

    return Promise.resolve()
  }

  prepareBucket(session) { 
    session.workspace.reload()

    if (!session.workspace.data || !session.workspace.data.web || !session.workspace.data.web || !session.workspace.data.web.domain) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the web domain is missing')))
    }

    const appDomain = session.workspace.data.web.domain

    const dir = path.resolve(this.cwd, '.app', 'web')
    const domainStats = parseDomain(appDomain)

    const { Domain, Bucket } = require('awsome')

    const tldDomain = new Domain({ name: `${domainStats.domain}.${domainStats.tld}` })
    const domain = new Domain({ name: appDomain })
    const bucket = new Bucket({ name: appDomain, dir, site: true })

    session.logger.info('Preparing for deployment ...')

    return this.ensureDomainIsHosted(session, domain)
               .then(() => this.ensureBucketExists(session, bucket))
               .then(() => this.ensureBucketIsLinked(session, domain))
               .then(() => bucket)
  }

  upload(session, bucket) {
    session.logger.info('Uploading files to bucket ...')

    return bucket.update()
  }

  exec(session) {
    return super.initialize(session)
                .then(() => this.findCredentials(session))
                .then(() => this.prepareBucket(session))
                .then((bucket) => this.upload(session, bucket))
  }
}

_.TITLE = "Deploying"
_.ID = 'deploy'

module.exports = _