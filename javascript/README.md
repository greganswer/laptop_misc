laptop
======

Laptop setup and update script for Mac users

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/laptop.svg)](https://npmjs.org/package/laptop)
[![CircleCI](https://circleci.com/gh/greganswer/laptop/tree/master.svg?style=shield)](https://circleci.com/gh/greganswer/laptop/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/laptop.svg)](https://npmjs.org/package/laptop)
[![License](https://img.shields.io/npm/l/laptop.svg)](https://github.com/greganswer/laptop/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Development](#development)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g laptop
$ laptop COMMAND
running command...
$ laptop (-v|--version|version)
laptop/0.0.0 darwin-x64 node-v13.8.0
$ laptop --help [COMMAND]
USAGE
  $ laptop COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`laptop help [COMMAND]`](#laptop-help-command)
* [`laptop setup`](#laptop-setup)

## `laptop help [COMMAND]`

display help for laptop

```
USAGE
  $ laptop help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `laptop setup`

Initial setup for a mac computer

```
USAGE
  $ laptop setup

OPTIONS
  --debug  Enable debug mode
```

_See code: [src/commands/setup.ts](https://github.com/greganswer/laptop/blob/v0.0.0/src/commands/setup.ts)_
<!-- commandsstop -->

# Development

1. Generate a command by running `npx oclif <COMMAND_NAME>` (the [oclif command generator](https://oclif.io/docs/generator_commands))
1. Write the [oclif test](https://oclif.io/docs/testing)
1. Write the [oclif command](https://oclif.io/docs/commands) 
1. Use the [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) library to ask for user input
1. Use the [listr](https://github.com/SamVerschueren/listr) library for multi step commands
1. Run `yarn test` before committing your changes
1. Run `yarn release` to publish using [np CLI](https://github.com/sindresorhus/np)

**Design Principles**

- Fewer flags is better
- Works across all platforms
- Fewer features
- Contributions must have and pass tests
