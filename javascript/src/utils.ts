
// Return process run time in HH:MM:SS format
// Reference: https://stackoverflow.com/a/25279399
// eslint-disable-next-line import/prefer-default-export
export function processDuration() {
  const date = new Date(0)
  date.setSeconds(process.uptime())
  return date.toISOString().substr(11, 8)
}
