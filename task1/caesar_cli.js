#!/usr/bin/env node
const parseArgvs = require('../lib/parseArgs')(process.argv)
const pipelineFn = require('../lib/pipeline')
const checkOpton = require('../lib/checkOption')

const { action = false, shift = false, input = false, output = false } = parseArgvs.opts()

checkOpton(action, shift, input, output, parseArgvs)
pipelineFn(action, shift, input, output)
