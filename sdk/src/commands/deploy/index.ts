import { Command, CommandProps, CommandType, AccessTokenType } from '../..'
import { Octokit } from '@octokit/rest'

const props: CommandProps = {
  id: 'deploy',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresAuth: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Deploy extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    const user = this.session?.user!
    const auth = this.session?.token(AccessTokenType.GITHUB)

    const github = new Octokit({ auth })

    const me = await github.request('/user')
    const keys = await github.users.listPublicKeysForUser({
      username: user.login,
    })
    const repos = await github.repos.listForUser({ username: user.login })

    const repoNames = repos.data.map((repo: any) => repo.name)

    console.log(me.data)
    console.log(keys.data)
    console.log(repoNames)
  }
}
