import {
  Command,
  Errors,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "data",
  requiredArgs: [],
  type: CommandType.ENVIRONMENT,
  title: "Managing Data"
}

/**
 * 
 * @category Commands
 */
export default class Data extends Command {
  /** @internal */
  constructor() {
    super(props)
  }

  get secretsVault() {
      return this.session?.index.sections.secrets.vault
  }

  get settingsVault() {
    return this.session?.index.sections.settings.vault
  }

  /** @internal */
  async exec() {
    const secure = this.arg("secure")
    const password = this.arg("password")
    const save = this.arg("save")
    const read = this.arg("read")
    const key = this.arg("key")
    const values =  this.arg("values")

    const vault = secure ? this.secretsVault : this.settingsVault

    try {
      if (secure && vault.isLocked) {
        await vault.unlock(password)
      }

      if (save) {
        vault.write(key, values)
      } else if (read) {
        console.log({
          data: vault.read(key)
        })
      }

      if (secure) {
        await vault.lock(password)
      }

    } catch (e) {
      console.error(e.message)
    }
  }
}
