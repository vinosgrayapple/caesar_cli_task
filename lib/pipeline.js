const fs = require('fs')
const chalk = require('chalk')
const { pipeline } = require('stream')
const through2 = require('through2')
const { isAlphabet, scope, businessLogic, shiftCharCode } = require('./functions')
module.exports = function(action, shift, input, output) {
	shift %= 26
	const inputPath = input ? fs.createReadStream(input, { flags: 'a+' }) : process.stdin
	const outputPath = output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout
	pipeline(
		inputPath,
		through2(function(chunk, _, callback) {
			for (let i = 0; i < chunk.length; i++)
				if (isAlphabet(chunk[i])) chunk[i] = businessLogic(shiftCharCode(chunk[i], shift, action), ...scope(chunk[i]))

			this.push(chunk)

			callback()
		}),
		outputPath,
		(err) => {
			if (err) {
				console.error(chalk.inverse.green('ERROR: '), err)
			}
			console.log(chalk.inverse.green('SUCCESS: Encryption completed!'))
		}
	)
}
