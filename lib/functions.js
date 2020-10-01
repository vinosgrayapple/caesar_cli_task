const isLowerCase = charCode => charCode >= 97 && charCode <= 122
const isUpperCase = charCode => charCode >= 65 && charCode <= 90
const scope = charCode => isLowerCase(charCode) ? [ 97, 122 ] : [ 65, 90 ]
const isAlphabet = charCode =>  isLowerCase(charCode) || isUpperCase(charCode)
const shiftCharCode = (charCode, shift, action) =>  charCode + shift * (action === 'encode' ? 1 : -1)
const businessLogic = (shiftChar, lowBase, highBase) => shiftChar < lowBase	? shiftChar + 26 : 
              shiftChar > highBase ? shiftChar - 26 : 
              shiftChar
module.exports = {
  isAlphabet,
  isLowerCase,
  businessLogic,
  scope,
  shiftCharCode
}