const glob = require('glob')
const log = require('../log')

exports.command = 'run'
exports.desc = 'Run aleatory tests'
exports.builder = {
  testNamePattern: {
    alias: 't',
    describe: "Pattern of the tests' file names",
    type: 'string',
    default: '**/*.aleatory.js'
  }
}
exports.handler = ({ testNamePattern }) => {
  glob(testNamePattern, (err, files) => {
    if (err || !files.length) {
      log.error('No matching test files were found')
      return process.exit(-1)
    }

    log.info(files)
  })
}
