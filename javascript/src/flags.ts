import { flags } from '@oclif/command'

// eslint-disable-next-line import/prefer-default-export
export const debugFlag = flags.boolean({
  description: 'Enable debug mode',
})
