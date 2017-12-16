const chalk = require('chalk')

module.exports = {
  info: (...args) => console.log(...args),
  error: (...args) => console.log('🚨 ', chalk.red(...args)),
  warn: (...args) => console.log('⚠️ ', chalk.yellow(...args))
}
