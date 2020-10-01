const path = require('path')
const parseIntOption = (value) => parseInt(value)
const parsePath = (value) => path.resolve(__dirname, '..', path.parse(value).base)

module.exports = (params) => {
	const { Command } = require('commander')
	const program = new Command()
	program.storeOptionsAsProperties(false).passCommandToAction(false)

	program
		.version('0.0.1')
    .usage(`node  caesar_cli[.js]  -a encode -s 7 -i "./input.txt" -o "./output.txt"

input.txt: This is secret. Message about "_" symbol!
output.txt: Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
    `)
		.description('Caesar cipher CLI tool')
		.option('-s, --shift <shift>', 'a shift', parseIntOption)
		.option('-i, --input <input>', 'an input file', parsePath)
		.option('-o, --output <output>', 'an output file', parsePath)
    .option('-a, --action <action>', 'an action encode/decode')
	program.parse(params)

	return program
}
