const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const error = (msg) => console.log(chalk.inverse.red(msg))
module.exports = function(action, shift, input, output, parseArgvs) {
	if (action === false && shift === false && input === false && output === false) {
		console.log()
		console.log(parseArgvs.usage())
		process.exit(1)
	}
	if (action !== 'decode' && action !== 'encode') {
		error(`
  Option -a. --action="${action}", must be 'decode' or 'encode'.
  `)
		process.exit(1)
	}
	if (!shift || shift < 0) {
		error(`
  Option shift = "${shift}", must be a positive integer.`)
		process.exit(1)
	}
	if (input) {
		testFile(input)
	} else {
		process.on('message', function() {
			error('\nTo complete the input, press (Ctrl-C)')
		})
	}

	if (output) testFile(output)
}

function testFile(f) {
	try {
		const stat = fs.statSync(f)
		if (!stat.isFile()) {
			error(`"${f}"  is wrong path to a file.`)
			process.exit(1)
		}
	} catch (err) {
		if (err.code === 'ENOENT') {
			error(`"${f}"  is wrong path to  file.`)
		}
		process.exit(1)
	}
	try {
		fs.accessSync(f, fs.constants.R_OK | fs.constants.W_OK)
	} catch (err) {
		error(`"${f}"  is wrong path to  file.`)
	}
}
