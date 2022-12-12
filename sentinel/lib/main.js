import debug from 'debug';
// import path from 'path'
// import { create } from 'ipfs-core'
// import { createFactory } from 'ipfsd-ctl'
// import fs from 'fs-extra'
// import { nanoid } from 'nanoid'
debug.enable("carmel*");
const LOG = debug("carmel:sentinel");
// const ROOTDIR = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/net/`
export const start = async () => {
    LOG('Starting...');
    // fs.existsSync(ROOTDIR) || fs.mkdirpSync(ROOTDIR)
    // const repoDir = path.join(ROOTDIR, `repo-${nanoid()}`)
    // const node = await create({
    //     repo: repoDir,
    //     config: {
    //         Addresses: {
    //             Swarm: [
    //             `/ip4/0.0.0.0/tcp/0`,
    //             `/ip4/127.0.0.1/tcp/0/ws`
    //             ],
    //             API: `/ip4/127.0.0.1/tcp/0`,
    //             Gateway: `/ip4/127.0.0.1/tcp/0`,
    //             RPC: `/ip4/127.0.0.1/tcp/0`
    //         },
    //         Bootstrap: []
    //     }
    // })
    LOG('Started');
};
//# sourceMappingURL=main.js.map