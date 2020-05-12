import { Command } from '@oclif/command' // https://oclif.io/docs/commands
import { debugFlag } from '../flags' // https://oclif.io/docs/flags#custom-flags
import * as setup from '../setup-functions'
import * as utils from '../utils'

const chalk = require('chalk') // https://github.com/chalk/chalk
const Listr = require('listr') // https://github.com/SamVerschueren/listr


export default class Setup extends Command {
  static description = 'Initial setup for a mac computer'

  static flags = {
    debug: debugFlag,
  }

  async run() {
    const { flags } = this.parse(Setup)

    // await setup.ssh()
    await setup.brews()

    const tasks = new Listr([
      {
        title: 'Create folders',
        task: setup.folders,
      },
      {
        title: 'Symlink Dot Files',
        task: setup.dotFiles,
      },
      {
        title: 'Setup ZShell',
        task: setup.zShell,
      },
      {
        title: 'Install Ruby',
        task: setup.ruby,
      },
      {
        title: 'Install Bundler',
        task: setup.bundler,
      },
      {
        title: 'Setup Local Databases',
        task: setup.localDatabases,
      },
      {
        title: 'Setup Vim editor',
        task: setup.vim,
      },
      {
        title: 'Setup VS Code editor',
        task: setup.vsCode,
      },
    ])
    await tasks.run().catch((error: any) => {
      if (flags.debug) {
        this.error(error)
      }
      process.exit(1) // eslint-disable-line unicorn/no-process-exit
    })

    this.log(
      '%s Setup finished in %s',
      chalk.green.bold('DONE'),
      chalk.cyan(utils.processDuration()),
    )
  }
}
