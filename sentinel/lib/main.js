import debug from 'debug';
import path from 'path';
import fs from 'fs-extra';
import * as Carmel from '@carmel/core';
import wrtc from 'wrtc';
const LOG = debug("carmel:sentinel");
export const start = async (isOperator = true) => {
    LOG('Starting...');
    const ROOTDIR = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh-${isOperator ? 'full' : 'light'}/`;
    fs.existsSync(ROOTDIR) || fs.mkdirpSync(ROOTDIR);
    const repoDir = path.join(ROOTDIR, `repo-${isOperator ? 'full' : 'light'}`);
    const revision = process.env.REV;
    const cwd = process.cwd();
    const baseConfig = JSON.parse(fs.readFileSync(path.join(cwd, `config.${isOperator ? 'full' : 'light'}.json`), 'utf-8'));
    const ses = new Carmel.Session({ ...baseConfig, isOperator, revision, root: repoDir, wrtc });
    await ses.start();
    LOG('Started');
};
//# sourceMappingURL=main.js.map