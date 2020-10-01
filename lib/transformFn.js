const { isAlphabet, scope, businessLogic, shiftCharCode } = require('./functions')


module.exports = function(shift, action) {
  return function(chunk, _, callback) {
    for (let i = 0; i < chunk.length; i++)
    if (isAlphabet(chunk[i])) 
      chunk[i] = businessLogic(shiftCharCode(chunk[i], shift, action), ...scope(chunk[i]))

    console.log(chunk[i]);
  
    this.push(chunk)

	callback()
  }

}
