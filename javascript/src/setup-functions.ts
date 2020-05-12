const execa = require('execa') // https://github.com/sindresorhus/execa
const fs = require('fs-extra') // https://github.com/jprichardson/node-fs-extra
const os = require('os') // https://nodejs.org/api/os.html
const path = require('path') // https://nodejs.org/api/path.html
const open = require('open') // https://github.com/sindresorhus/open

const inquirer = require('../lib/inquirer')

// Create desired development folders.
export async function folders() {
  ['code/work', 'code/personal', 'code/vendor'].forEach(async (folder) => {
    const fullPath = path.resolve(path.join(os.homedir(), folder))
    await fs.ensureDir(fullPath)
  })
}

// Reference: https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
export async function ssh() {
  const res = await inquirer.askGithubCredentials()

  await execa('ssh-keygen', ['-t', 'rsa', '-b', '4096', '-C', `"${res.email}"`])
  await execa('eval', ['"$(ssh-agent -s)"'])

  const source = path.resolve('./settings/ssh-config')
  const destination = path.resolve(path.join(os.homedir(), '.ssh/config'))
  await fs.copy(source, destination, { overwrite: true })

  await execa('ssh-add', ['-K', '~/.ssh/id_rsa'])

  open('https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account')
  await inquirer.askSSHKeyAddedToGitHub()
}

// Install apps and commands using Homebrew Brewfile.
export async function brews() {
  await execa('brew', ['bundle', 'install'])
}

// Symlink the dot files.
export async function dotFiles() {
  await fs.readdir('./dotfiles', async (err: any, files: any[]) => {
    files.forEach(async (file: any) => {
      const source = path.resolve(file)
      const destination = path.resolve(path.join(os.homedir(), `.${file}`))
      await fs.ensureSymlinkSync(source, destination)
    })
  })
}

// Setup ZShell as the default shell.
export async function zShell() {
  await execa('curl', [
    '-fsSL',
    'https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh',
  ])
}

// Install Ruby.
export async function ruby() {
  await execa('rbenv', ['install', '2.6.0'])
  await execa('rbenv', ['global', '2.6.0'])
}

// Install Bundler Gem manager.
export async function bundler() {
  await execa('gem', ['install', 'bundler'])
}

// Setup local databases for development.
export async function localDatabases() {
  await execa('brew', ['services', 'start', 'postgresql'])
  await execa('createdb', [os.userInfo().username])
}

// Setup Vim editor.
export async function vim() {
  const destination = path.resolve('~/.vim/bundle/Vundle.vim')
  await execa('git', [
    'clone',
    'https://github.com/VundleVim/Vundle.vim.git',
    destination,
  ])
}

// Setup Visual Studio Code editor.
export async function vsCode() {
  const source = path.resolve('./settings/vscode.json')
  const destination = path.resolve('~/Library/Application Support/Code/User/settings.json')
  await fs.ensureSymlinkSync(source, destination)
}
