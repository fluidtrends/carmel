import fs from 'fs-extra'
import path from 'path'
import * as system from '../../system'

export const createYarnConfig = async () => {
    const env = system.env()

    fs.existsSync(env.cache.path) || fs.mkdirsSync(env.cache.path)

    const yarnFile = path.resolve(env.home.path, '.yarnrc')

    if (fs.existsSync(yarnFile)) {
        return
    }

    fs.writeFileSync(yarnFile, `registry "https://registry.npmjs.org/"
yarn-offline-mirror-pruning true
yarn-offline-mirror yarn/yarnmirror
--install.production true
--network-timeout 9999999
--install.no-progress true
--install.silent true
--install.prefer-offline true
--cache-folder yarn/yarncache`, 'utf8')

}

