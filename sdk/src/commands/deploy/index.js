const path = require('path')
const Command = require('../../Command')
const parseDomain = require("parse-domain")

export class DeployCommand extends Command {
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

  setupDomainBucket(session, domain, bucket) {
    return this.ensureDomainIsHosted(session, domain)
               .then(() => this.ensureBucketExists(session, bucket))
               .then(() => this.ensureBucketIsLinked(session, domain))
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

    return this.setupDomainBucket(session, domain, bucket)  
               .then(() => {
                 if (!domainStats.subdomain) {
                  const redirectBucket = new Bucket({ name: `www.${appDomain}`, site: { redirectTo: appDomain } })
                  const redirectDomain = new Domain({ name:  `www.${appDomain}` })

                  return this.ensureBucketExists(session, redirectBucket).then(() => this.ensureBucketIsLinked(session, redirectDomain))
                 }
               })
               .then(() => bucket)
  }

  upload(session, bucket) {
    session.logger.info('Uploading files to bucket ...')

    // return bucket.update()
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
